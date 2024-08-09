-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "fileKey" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
