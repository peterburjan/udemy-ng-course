import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    SharedModule,
    FormsModule
  ]
})
export class ShoppingListModule {

}
