import { Router } from 'express'
import multer from 'multer'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ImportCategoriesController } from '../modules/cars/useCases/importCategories/ImportCategoriesController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'

import uploadConfig from '../config/upload'

export const categoriesRoutes = Router()

const upload = multer(uploadConfig.upload('./tmp'))

const createCategoryController = new CreateCategoryController()
const importCategoriesController = new ImportCategoriesController()
const listCategoriesController = new ListCategoriesController()

categoriesRoutes.use(ensureAuthenticated)

categoriesRoutes.post('/', createCategoryController.handle)

categoriesRoutes.get('/', listCategoriesController.handle)

categoriesRoutes.post('/import', upload.single("file"), importCategoriesController.handle)
