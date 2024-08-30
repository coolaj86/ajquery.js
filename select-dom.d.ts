/**
 * select-dom (https://github.com/fregante/select-dom)
 * MIT License
 * Copyright (c) Federico Brigante Federico Brigante <me@fregante.com> (https://fregante.com)
 * Copyright (c) 2014 Azer Koçulu <azer@kodfabrik.com>
 */

import type { ParseSelector } from "typed-query-selector/parser.js";

type BaseElements = ParentNode | Iterable<ParentNode>;

/**
 * @param selectors      One or more CSS selectors separated by commas
 * @param [baseElement]  The element to look inside of
 * @return               The element found, if any
 */
declare function $<
  Selector extends string,
  Selected extends Element = ParseSelector<Selector, HTMLElement>,
>(
  selectors: Selector | Selector[],
  baseElement?: ParentNode
): Selected | undefined;

declare function $<Selected extends Element = HTMLElement>(
  selectors: string | string[],
  baseElement?: ParentNode
): Selected | undefined;

export declare class ElementNotFoundError extends Error {
  name: string;
}

/**
 * @param selectors      One or more CSS selectors separated by commas
 * @param [baseElement]  The element to look inside of
 * @return               The element found, or an error
 */
declare function expectElement<
  Selector extends string,
  Selected extends Element = ParseSelector<Selector, HTMLElement>,
>(selectors: Selector | Selector[], baseElement?: ParentNode): Selected;
declare function expectElement<Selected extends Element = HTMLElement>(
  selectors: string | string[],
  baseElement?: ParentNode
): Selected;

/**
 * @param selectors      One or more CSS selectors separated by commas
 * @param [baseElement]  The element to look inside of
 * @return               The element found, if any
 */
declare function lastElement<
  Selector extends string,
  Selected extends Element = ParseSelector<Selector, HTMLElement>,
>(
  selectors: Selector | Selector[],
  baseElement?: ParentNode
): Selected | undefined;
declare function lastElement<Selected extends Element = HTMLElement>(
  selectors: string | string[],
  baseElement?: ParentNode
): Selected | undefined;

/**
 * @param selectors      One or more CSS selectors separated by commas
 * @param [baseElement]  The element to look inside of
 * @return               Whether it's been found
 */
declare function elementExists(
  selectors: string | string[],
  baseElement?: ParentNode
): boolean;

/**
 * @param selectors       One or more CSS selectors separated by commas
 * @param [baseElements]  The element or list of elements to look inside of
 * @return                An array of elements found
 */
declare function $$<
  Selector extends string,
  Selected extends Element = ParseSelector<Selector, HTMLElement>,
>(selectors: Selector | Selector[], baseElements?: BaseElements): Selected[];
declare function $$<Selected extends Element = HTMLElement>(
  selectors: string | string[],
  baseElements?: BaseElements
): Selected[];

export { $, $$, lastElement, elementExists, expectElement };
