import { home } from './home.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';



describe('home', () => {
  let component: home;
  let fixture: ComponentFixture<home>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ home ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
