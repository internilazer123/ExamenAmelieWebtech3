import { TestBed } from "@angular/core/testing";

import { PkmnSearchService } from "./recepten.service";

describe("PkmnSearchService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: PkmnSearchService = TestBed.get(PkmnSearchService);
    expect(service).toBeTruthy();
  });
});
