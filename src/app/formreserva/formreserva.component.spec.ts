import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormreservaComponent } from './formreserva.component';
import { RouterTestingModule } from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule}   from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatDialogModule,
        MatSidenavModule
} from '@angular/material';

describe('FormreservaComponent', () => {
  let component: FormreservaComponent;
  let fixture: ComponentFixture<FormreservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatDialogModule,
        MatSidenavModule
      ],
      declarations: [ FormreservaComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
