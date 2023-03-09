import prisma from '../loaders/mainDBInit';

export const createCategory = async (name: string, categoryId : any) => {
    return prisma.category.create({
        data: {
            name: name,
            parentCategory: categoryId
        }
    });
};

export const fetchCategories = async () => {
    return prisma.category.findMany();
};

export const fetchCategory = async (categoryId: string) => {
    return await prisma.category.findUnique({
        where: {
            id: categoryId
        },
    });
};

export const fetchCategoryParent = async (categoryId: string) => {
    return await prisma.category.findUnique({
        where: {
            id: categoryId
        }
    });
};