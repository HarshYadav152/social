/**
 * Polyfill for React Router 7 with Jest
 */

import { TextEncoder, TextDecoder } from 'util';

Object.defineProperties(global, {
  TextEncoder: { value: TextEncoder },
  TextDecoder: { value: TextDecoder }
});

// Polyfill for Headers, Request, Response etc. used by React Router 7
import 'whatwg-fetch';