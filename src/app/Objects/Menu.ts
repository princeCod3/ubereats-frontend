/**
 * This menu will be displayed as a Category
 */

export class Menu{
  
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  foodOutletEmail: string;
  active: boolean;
  
  constructor(id: number, name: string, description: string, imageUrl: string, 
     foodOutletEmail: string, active: boolean){
  
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.foodOutletEmail = foodOutletEmail;
    this.active = active;

  }
  
}