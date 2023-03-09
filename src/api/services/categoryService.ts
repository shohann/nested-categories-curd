import prisma from '../loaders/mainDBInit';

export const createCategory = async (name: string) => {
    return prisma.category.create({
        data: {
            name: name
        }
    });
};