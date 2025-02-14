import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  [1, 2, 11, 'Fred', 10.2, ''].forEach((size) => {
    it(`should generate an error if invalid game size of "${size}" is selected`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.input = size as string;
      app.changeSize();

      expect(app.error).toBeTruthy();
    });
  });
});
