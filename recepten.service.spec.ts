import { TestBed } from "@angular/core/testing";

import { PkmnSearchService } from "./pkmn-search.service";

describe("PkmnSearchService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: PkmnSearchService = TestBed.get(PkmnSearchService);
    expect(service).toBeTruthy();
  });
});
