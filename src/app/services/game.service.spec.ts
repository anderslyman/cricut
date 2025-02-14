import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should detect a horizontal win', () => {
    service.startNewGame(2);
    service.selectCell(0, 0); // X
    service.selectCell(1, 0); // Y
    service.selectCell(0, 1); // X
    expect(service.isOver).toBeTruthy();
    expect(service.winningPlayer).toBe('X');
  });

  it('should detect a vertical win', () => {
    service.startNewGame(2);
    service.selectCell(0, 0); // X
    service.selectCell(1, 1); // Y
    service.selectCell(1, 0); // X
    expect(service.isOver).toBeTruthy();
    expect(service.winningPlayer).toBe('X');
  });

  it('should detect a diagonal win', () => {
    service.startNewGame(2);
    service.selectCell(0, 0); // X
    service.selectCell(1, 0); // Y
    service.selectCell(1, 1); // X
    expect(service.isOver).toBeTruthy();
    expect(service.winningPlayer).toBe('X');
  });
});
