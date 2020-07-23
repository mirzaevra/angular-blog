import {NgModule} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule]
})

export class SharedModule {
}
