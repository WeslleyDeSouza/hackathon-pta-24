import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserModalComponentComponent } from './user-modal.component';

describe('UserModalComponentComponent', () => {
  let component: UserModalComponentComponent;
  let fixture: ComponentFixture<UserModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModalComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
