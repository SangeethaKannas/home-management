import { Component } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'home-management-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent {
  locations = [
    'Hall',
    'Master Bedroom',
    'Master Bedroom Loft',
    'Bedroom',
    'Bedroom Loft',
    'Portigo',
    'Garden',
    '1st Floor Storeroom',
    'Motorroom'
  ];
  sources = ['Marriage Gift', 'Gift', 'Store', 'Online'];
  materials = [
    'Paper',
    'Soil',
    'Wood',
    'Iron',
    'Brass',
    'Electonics',
    'Electrical'
  ];
  usedPlaces = ['Cooking', 'Driving'];

  itemModel = new Item(1, 'Chair');
  constructor() {}

  onSubmit() {}
}
