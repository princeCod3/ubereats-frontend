/**
 * One menu can have many Products
 */

export class Product{
  
  id: number;
  code: string;
  desription: string;
  imageUrl: string;
  name: string;
  purchases: number;
  views: number;
  unitPrice: number;
  active: boolean;
  
  constructor(id: number, code: string, desription: string, imageUrl: string,
   name: string, purchases: number, views: number, unitPrice: number, active: boolean) {
  
    this.id = id;
    this.code = code;
    this.desription = description;
    this.imageUrl = imageUrl;
    this.name = name;
    this.purchases = purchases;
    this.views = views;
    this.unitPrice = unitPrice;
    this.active = active;

  }
  
}