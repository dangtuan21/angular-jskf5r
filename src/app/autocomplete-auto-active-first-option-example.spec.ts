import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutocompleteAutoActiveFirstOptionExample } from './autocomplete-auto-active-first-option-example';

fdescribe('AutocompleteAutoActiveFirstOptionExample', () => {
  let component: AutocompleteAutoActiveFirstOptionExample;
  let fixture: ComponentFixture<AutocompleteAutoActiveFirstOptionExample>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [AutocompleteAutoActiveFirstOptionExample],
      providers: [
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteAutoActiveFirstOptionExample);
    component = fixture.componentInstance;
    
    fixture.detectChanges();

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
