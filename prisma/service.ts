import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const countAllProducts = async () => {
  return await prisma.stockInWarehouse.aggregate({
    _sum: {
      quantity: true
    }
  });
}

export const countAllProductsOnStock = async (uuid: string) => {
  return await prisma.stockInWarehouse.aggregate({
    where: {
      warehouseId: uuid
    },
    _sum: {
      quantity: true
    }
  });
}

export const countProduct = async (sku: string) => {
  return await prisma.stockInWarehouse.aggregate({
    where: {
      productId: sku
    },
    _sum: {
      quantity: true
    }
  });
}

export const countProductOnStock = async (uuid: string, sku: string) => {
  return await prisma.stockInWarehouse.aggregate({
    where: {
      warehouseId: uuid,
      productId: sku
    },
    _sum: {
      quantity: true
    }
  });
}

export const countProductByCategory = async (slug: string) => {
  return await prisma.productCategory.aggregate({
    where: {
      categoryId: slug
    },
    _count: {
      productId: true
    }
  });
}

export const countProductOnStockByCategory = async (uuid: string, slug: string) => {
  return await prisma.stockInWarehouse.aggregate({
    where: {
      warehouseId: uuid,
      product: {
        categories: {
          some: {
            categoryId: slug
          }
        }
      }
    },
    _sum: {
      quantity: true
    }
  });
}
