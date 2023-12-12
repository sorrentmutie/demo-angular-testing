import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { By } from '@angular/platform-browser';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Banner works', () => {
      const bannerElement: HTMLElement = fixture.nativeElement;
      expect(bannerElement.textContent).toContain('Banner works');
  });

  it('should contain a <p> tag with "Banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('p');
    expect(p?.textContent).toContain('Banner works');
  });

  it('should contain a <p> tag with class myClass"', () => {

    const debugElement = fixture.debugElement;
    const p = debugElement.query(By.css('p.myClass'));
   
    expect(p).not.toBeNull();
  });


});
