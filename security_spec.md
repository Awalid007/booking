# Security Specification for Aura Performance

## Data Invariants
- A lead must have a valid name, email, and phone number.
- `createdAt` must be set to the server time.
- Leads can only be created. They cannot be read, updated, or deleted by the public.

## The "Dirty Dozen" Payloads (Testing Denials)
1. **Unauthenticated Read**: Attempt to list all leads.
2. **Identity Spoofing**: Attempt to create a lead with a fake `ownerId` (if we had one).
3. **Invalid Email**: Create lead with `email: "not-an-email"`.
4. **Large Payload**: Attempt to inject 1MB of text into the `name` field.
5. **Backdated Lead**: Create lead with `createdAt` in the past.
6. **Future Lead**: Create lead with `createdAt` in the future.
7. **Unauthorized Update**: Attempt to update an existing lead's phone number.
8. **Unauthorized Delete**: Attempt to delete a lead.
9. **Missing Fields**: Create lead without a `phone` number.
10. **Type Mismatch**: Send `phone` as a boolean.
11. **Extra Fields**: Add a `isVerified: true` field to the lead.
12. **Malicious ID**: Use a document ID that is 2KB long.

## Test Runner (Conceptual)
All the above should return `PERMISSION_DENIED`.
