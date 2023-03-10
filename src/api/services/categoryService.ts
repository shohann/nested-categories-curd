import prisma from '../loaders/mainDBInit';

export const createRootCategory = async (name: string) => {
    return await prisma.category.create({
        data: {
            name: name
        }
    });
};

export const createChildCategory = async (name: string, parentId: string) => {
   return await prisma.category.create({
        data: {
            name: name,
            parentId: parentId
        }
   }) ;
};

export const fetchCategory = async (categoryId: string) => {
    return await prisma.category.findUnique({
        where: {
            id: categoryId
        },
        include: {
            parent: true
        }
    });
};

export const fetchCategories = async () => {
    return await prisma.category.findMany();
}