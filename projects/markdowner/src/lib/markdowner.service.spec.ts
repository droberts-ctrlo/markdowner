import { TestBed } from '@angular/core/testing';

import { MarkdownerService } from './markdowner.service';

describe('MarkdownerService', () => {
  let service: MarkdownerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
