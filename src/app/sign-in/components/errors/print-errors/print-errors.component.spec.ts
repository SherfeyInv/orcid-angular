import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PrintErrorsComponent } from './print-errors.component'
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
} from '@angular/material/legacy-dialog'
import { WINDOW_PROVIDERS } from '../../../../cdk/window'

describe('PrintErrorsComponent', () => {
  let component: PrintErrorsComponent
  let fixture: ComponentFixture<PrintErrorsComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintErrorsComponent],
      providers: [WINDOW_PROVIDERS],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintErrorsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
