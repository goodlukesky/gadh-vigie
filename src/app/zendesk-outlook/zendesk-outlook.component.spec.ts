import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZendeskOutlookComponent } from './zendesk-outlook.component';

describe('ZendeskOutlookComponent', () => {
  let component: ZendeskOutlookComponent;
  let fixture: ComponentFixture<ZendeskOutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ZendeskOutlookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZendeskOutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
