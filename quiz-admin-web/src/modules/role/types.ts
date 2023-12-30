export enum Role {
    NORMAL = 0,
    ADMIN = 1,
    OWNER = 2
  }
  
  export function isAdmin(role: number) {
    return (role & Role.ADMIN) === Role.ADMIN
  }
  
  export function isOwner(role: number) {
    return (role & Role.OWNER) === Role.OWNER
  }
  
  export function isNormal(role: number) {
    return role === 0
  }
  
  export function inRole(requireRole: number, role: number) {
    if (requireRole === 0) {
      return true
    }
    return (requireRole & role) !== 0
  }
  
  export function hasPermission(role: number) {
    return isAdmin(role) || isOwner(role)
  }