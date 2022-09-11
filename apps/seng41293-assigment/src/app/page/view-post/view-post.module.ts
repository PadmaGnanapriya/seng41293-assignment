import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPostRoutingModule } from './view-post-routing.module';
import { ViewPostComponent } from './view-post.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [ViewPostComponent],
  imports: [CommonModule, ViewPostRoutingModule, MatToolbarModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
})
export class ViewPostModule {}
