import { AppError } from "../../../../shared/errors/AppError"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let categoriesRepositoryInMemory: ICategoriesRepository
let createCategoryUseCase: CreateCategoryUseCase

describe('Create category', () => {

  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
  })

  it('should be able to create a category', async () => {
    const category  = {
      name: 'Test Category',
      description: 'Test Category Description'
    }

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    })

    const categoryHasBeenCreated = await categoriesRepositoryInMemory.findByName(category.name)

    expect(categoryHasBeenCreated).toHaveProperty('id')
  })

  it('should not be able to create two categories with the same name', () => {
    expect(async () => {
      const category  = {
        name: 'Test Category',
        description: 'Test Category Description'
      }

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      })

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})