import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MiniGameCellComponent } from './components/mini-game/components/mini-game-cell/mini-game-cell.component';
import { MiniGameFieldComponent } from './components/mini-game/components/mini-game-field/mini-game-field.component';
import { MiniGameHeaderComponent } from './components/mini-game/components/mini-game-header/mini-game-header.component';
import { MiniGameComponent } from './components/mini-game/mini-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MiniGameComponent,
    MiniGameCellComponent,
    MiniGameFieldComponent,
    MiniGameHeaderComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
