import fs from 'fs'
import { inject, injectable } from 'tsyringe'
import { parse } from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IImportCategories {
  name: string;
  description: string;
}

@injectable()
export class ImportCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const parseFile = parse()
      const loadedCategories: IImportCategories[] = []

      stream.pipe(parseFile)

      parseFile.on('data', async ([name, description]) => {

      loadedCategories.push({ name, description })

      })
      .on('end', () => {
        fs.promises.unlink(file.path)
        resolve(loadedCategories)
      })
      .on('error', (error) => {
        reject(error)
      })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)

    categories.map(async ({name, description}) => {
      const categoryAlreadyExists = await this.categoriesRepository.findByName(name)
      if(!categoryAlreadyExists) {
        await this.categoriesRepository.create({ name, description })
      }
    })
  }
}
