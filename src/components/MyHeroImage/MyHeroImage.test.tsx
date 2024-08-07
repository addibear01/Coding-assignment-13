import '@testing-library/jest-dom';
import { sum } from "./MyHeroImage";

test('adds 1 + 2 to equal 3',() => {
    expect(sum(1,2)).toBe(3);
});

import {expect,test} from '@jest/globals';