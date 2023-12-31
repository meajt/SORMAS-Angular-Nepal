import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityAddEditComponent } from './community-add-edit.component';

describe('CommunityAddEditComponent', () => {
  let component: CommunityAddEditComponent;
  let fixture: ComponentFixture<CommunityAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityAddEditComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
