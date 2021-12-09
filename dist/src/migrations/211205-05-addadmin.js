"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = exports.shorthands = void 0;
exports.shorthands = undefined;
const up = (pgm) => {
    pgm.sql(`
   INSERT INTO "User" (id, firstname, lastname, othernames, email,password, role) VALUES ('f0101f12-6df2-42cd-8278-a8711a4314ba','odafe', 'admin', 'testing', 'admin@testing.com', '$2b$10$omArpyAhvI4PrZF9yc1cguoAtbN7lXvvmBgNajvhULfDWnvcRJjny', 'admin');
   `);
};
exports.up = up;
