import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterDnsComponent } from './after-dns.component';

describe('AfterDnsComponent', () => {
  let component: AfterDnsComponent;
  let fixture: ComponentFixture<AfterDnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterDnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterDnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
