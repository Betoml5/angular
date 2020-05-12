/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as o from '../../../../src/output/output_ast';

import * as cir from './ir/create';
import {NodeKind, Property} from './ir/update';

export function createProperty(id: cir.Id,
    name: string, expressionOrValue: string|null|o.LiteralExpr): Property {
  const expression =
      expressionOrValue instanceof o.LiteralExpr ? expressionOrValue : o.literal(expressionOrValue);
  return {next: null, prev: null, kind: NodeKind.Property, id, name, expression};
}