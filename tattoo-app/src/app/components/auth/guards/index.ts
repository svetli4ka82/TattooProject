import { UserGuards } from './auth.guard.component';
import { AdminGuards } from './admin.guard.component';

export const guards = [
    UserGuards,
    AdminGuards,
];