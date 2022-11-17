import fs from 'fs'
import { parse } from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IImportCategories {
  name: string;
  description: string;
}

export class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const parseFile = parse()
      const loadedCategories: IImportCategories[] = []

      stream.pipe(parseFile)

      parseFile.on('data', async ([name, description]) => {

        const categoryAlreadyExists = this.categoriesRepository.findByName(name)
        if(categoryAlreadyExists) {
          throw new Error(`Category ${name} already exists`)
        }

        loadedCategories.push({ name, description })
      })
      .on('end', () => {
        resolve(loadedCategories)
      })
      .on('error', (error) => {
        reject(error)
      })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)
    console.log(categories)
  }
}
