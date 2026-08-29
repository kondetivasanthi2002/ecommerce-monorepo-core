// Domain Type Contracts & DTO definitions

export interface UserEntity_001 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_001 = Omit<UserEntity_001, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_001 = Partial<CreateUserDTO_001>;

export interface UserEntity_002 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_002 = Omit<UserEntity_002, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_002 = Partial<CreateUserDTO_002>;

export interface UserEntity_003 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_003 = Omit<UserEntity_003, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_003 = Partial<CreateUserDTO_003>;

export interface UserEntity_004 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_004 = Omit<UserEntity_004, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_004 = Partial<CreateUserDTO_004>;

export interface UserEntity_005 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_005 = Omit<UserEntity_005, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_005 = Partial<CreateUserDTO_005>;

export interface UserEntity_006 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_006 = Omit<UserEntity_006, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_006 = Partial<CreateUserDTO_006>;

export interface UserEntity_007 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_007 = Omit<UserEntity_007, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_007 = Partial<CreateUserDTO_007>;

export interface UserEntity_008 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_008 = Omit<UserEntity_008, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_008 = Partial<CreateUserDTO_008>;

export interface UserEntity_009 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_009 = Omit<UserEntity_009, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_009 = Partial<CreateUserDTO_009>;

export interface UserEntity_010 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_010 = Omit<UserEntity_010, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_010 = Partial<CreateUserDTO_010>;

export interface UserEntity_011 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_011 = Omit<UserEntity_011, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_011 = Partial<CreateUserDTO_011>;

export interface UserEntity_012 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_012 = Omit<UserEntity_012, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_012 = Partial<CreateUserDTO_012>;

export interface UserEntity_013 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_013 = Omit<UserEntity_013, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_013 = Partial<CreateUserDTO_013>;

export interface UserEntity_014 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_014 = Omit<UserEntity_014, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_014 = Partial<CreateUserDTO_014>;

export interface UserEntity_015 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_015 = Omit<UserEntity_015, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_015 = Partial<CreateUserDTO_015>;

export interface UserEntity_016 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_016 = Omit<UserEntity_016, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_016 = Partial<CreateUserDTO_016>;

export interface UserEntity_017 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_017 = Omit<UserEntity_017, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_017 = Partial<CreateUserDTO_017>;

export interface UserEntity_018 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_018 = Omit<UserEntity_018, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_018 = Partial<CreateUserDTO_018>;

export interface UserEntity_019 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_019 = Omit<UserEntity_019, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_019 = Partial<CreateUserDTO_019>;

export interface UserEntity_020 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_020 = Omit<UserEntity_020, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_020 = Partial<CreateUserDTO_020>;

export interface UserEntity_021 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_021 = Omit<UserEntity_021, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_021 = Partial<CreateUserDTO_021>;

export interface UserEntity_022 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_022 = Omit<UserEntity_022, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_022 = Partial<CreateUserDTO_022>;

export interface UserEntity_023 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_023 = Omit<UserEntity_023, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_023 = Partial<CreateUserDTO_023>;

export interface UserEntity_024 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_024 = Omit<UserEntity_024, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_024 = Partial<CreateUserDTO_024>;

export interface UserEntity_025 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_025 = Omit<UserEntity_025, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_025 = Partial<CreateUserDTO_025>;

export interface UserEntity_026 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_026 = Omit<UserEntity_026, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_026 = Partial<CreateUserDTO_026>;

export interface UserEntity_027 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_027 = Omit<UserEntity_027, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_027 = Partial<CreateUserDTO_027>;

export interface UserEntity_028 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_028 = Omit<UserEntity_028, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_028 = Partial<CreateUserDTO_028>;

export interface UserEntity_029 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_029 = Omit<UserEntity_029, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_029 = Partial<CreateUserDTO_029>;

export interface UserEntity_030 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_030 = Omit<UserEntity_030, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_030 = Partial<CreateUserDTO_030>;

export interface UserEntity_031 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_031 = Omit<UserEntity_031, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_031 = Partial<CreateUserDTO_031>;

export interface UserEntity_032 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_032 = Omit<UserEntity_032, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_032 = Partial<CreateUserDTO_032>;

export interface UserEntity_033 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_033 = Omit<UserEntity_033, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_033 = Partial<CreateUserDTO_033>;

export interface UserEntity_034 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_034 = Omit<UserEntity_034, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_034 = Partial<CreateUserDTO_034>;

export interface UserEntity_035 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_035 = Omit<UserEntity_035, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_035 = Partial<CreateUserDTO_035>;

export interface UserEntity_036 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_036 = Omit<UserEntity_036, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_036 = Partial<CreateUserDTO_036>;

export interface UserEntity_037 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_037 = Omit<UserEntity_037, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_037 = Partial<CreateUserDTO_037>;

export interface UserEntity_038 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_038 = Omit<UserEntity_038, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_038 = Partial<CreateUserDTO_038>;

export interface UserEntity_039 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_039 = Omit<UserEntity_039, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_039 = Partial<CreateUserDTO_039>;

export interface UserEntity_040 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_040 = Omit<UserEntity_040, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_040 = Partial<CreateUserDTO_040>;

export interface UserEntity_041 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_041 = Omit<UserEntity_041, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_041 = Partial<CreateUserDTO_041>;

export interface UserEntity_042 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_042 = Omit<UserEntity_042, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_042 = Partial<CreateUserDTO_042>;

export interface UserEntity_043 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_043 = Omit<UserEntity_043, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_043 = Partial<CreateUserDTO_043>;

export interface UserEntity_044 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_044 = Omit<UserEntity_044, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_044 = Partial<CreateUserDTO_044>;

export interface UserEntity_045 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_045 = Omit<UserEntity_045, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_045 = Partial<CreateUserDTO_045>;

export interface UserEntity_046 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_046 = Omit<UserEntity_046, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_046 = Partial<CreateUserDTO_046>;

export interface UserEntity_047 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_047 = Omit<UserEntity_047, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_047 = Partial<CreateUserDTO_047>;

export interface UserEntity_048 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_048 = Omit<UserEntity_048, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_048 = Partial<CreateUserDTO_048>;

export interface UserEntity_049 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_049 = Omit<UserEntity_049, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_049 = Partial<CreateUserDTO_049>;

export interface UserEntity_050 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_050 = Omit<UserEntity_050, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_050 = Partial<CreateUserDTO_050>;

export interface UserEntity_051 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_051 = Omit<UserEntity_051, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_051 = Partial<CreateUserDTO_051>;

export interface UserEntity_052 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_052 = Omit<UserEntity_052, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_052 = Partial<CreateUserDTO_052>;

export interface UserEntity_053 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_053 = Omit<UserEntity_053, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_053 = Partial<CreateUserDTO_053>;

export interface UserEntity_054 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_054 = Omit<UserEntity_054, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_054 = Partial<CreateUserDTO_054>;

export interface UserEntity_055 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_055 = Omit<UserEntity_055, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_055 = Partial<CreateUserDTO_055>;

export interface UserEntity_056 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_056 = Omit<UserEntity_056, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_056 = Partial<CreateUserDTO_056>;

export interface UserEntity_057 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_057 = Omit<UserEntity_057, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_057 = Partial<CreateUserDTO_057>;

export interface UserEntity_058 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_058 = Omit<UserEntity_058, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_058 = Partial<CreateUserDTO_058>;

export interface UserEntity_059 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_059 = Omit<UserEntity_059, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_059 = Partial<CreateUserDTO_059>;

export interface UserEntity_060 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_060 = Omit<UserEntity_060, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_060 = Partial<CreateUserDTO_060>;

export interface UserEntity_061 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_061 = Omit<UserEntity_061, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_061 = Partial<CreateUserDTO_061>;

export interface UserEntity_062 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_062 = Omit<UserEntity_062, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_062 = Partial<CreateUserDTO_062>;

export interface UserEntity_063 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_063 = Omit<UserEntity_063, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_063 = Partial<CreateUserDTO_063>;

export interface UserEntity_064 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_064 = Omit<UserEntity_064, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_064 = Partial<CreateUserDTO_064>;

export interface UserEntity_065 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_065 = Omit<UserEntity_065, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_065 = Partial<CreateUserDTO_065>;

export interface UserEntity_066 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_066 = Omit<UserEntity_066, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_066 = Partial<CreateUserDTO_066>;

export interface UserEntity_067 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_067 = Omit<UserEntity_067, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_067 = Partial<CreateUserDTO_067>;

export interface UserEntity_068 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_068 = Omit<UserEntity_068, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_068 = Partial<CreateUserDTO_068>;

export interface UserEntity_069 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_069 = Omit<UserEntity_069, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_069 = Partial<CreateUserDTO_069>;

export interface UserEntity_070 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_070 = Omit<UserEntity_070, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_070 = Partial<CreateUserDTO_070>;

export interface UserEntity_071 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_071 = Omit<UserEntity_071, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_071 = Partial<CreateUserDTO_071>;

export interface UserEntity_072 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_072 = Omit<UserEntity_072, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_072 = Partial<CreateUserDTO_072>;

export interface UserEntity_073 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_073 = Omit<UserEntity_073, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_073 = Partial<CreateUserDTO_073>;

export interface UserEntity_074 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_074 = Omit<UserEntity_074, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_074 = Partial<CreateUserDTO_074>;

export interface UserEntity_075 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_075 = Omit<UserEntity_075, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_075 = Partial<CreateUserDTO_075>;

export interface UserEntity_076 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_076 = Omit<UserEntity_076, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_076 = Partial<CreateUserDTO_076>;

export interface UserEntity_077 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_077 = Omit<UserEntity_077, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_077 = Partial<CreateUserDTO_077>;

export interface UserEntity_078 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_078 = Omit<UserEntity_078, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_078 = Partial<CreateUserDTO_078>;

export interface UserEntity_079 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_079 = Omit<UserEntity_079, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_079 = Partial<CreateUserDTO_079>;

export interface UserEntity_080 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_080 = Omit<UserEntity_080, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_080 = Partial<CreateUserDTO_080>;

export interface UserEntity_081 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_081 = Omit<UserEntity_081, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_081 = Partial<CreateUserDTO_081>;

export interface UserEntity_082 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_082 = Omit<UserEntity_082, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_082 = Partial<CreateUserDTO_082>;

export interface UserEntity_083 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_083 = Omit<UserEntity_083, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_083 = Partial<CreateUserDTO_083>;

export interface UserEntity_084 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_084 = Omit<UserEntity_084, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_084 = Partial<CreateUserDTO_084>;

export interface UserEntity_085 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_085 = Omit<UserEntity_085, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_085 = Partial<CreateUserDTO_085>;

export interface UserEntity_086 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_086 = Omit<UserEntity_086, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_086 = Partial<CreateUserDTO_086>;

export interface UserEntity_087 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_087 = Omit<UserEntity_087, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_087 = Partial<CreateUserDTO_087>;

export interface UserEntity_088 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_088 = Omit<UserEntity_088, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_088 = Partial<CreateUserDTO_088>;

export interface UserEntity_089 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_089 = Omit<UserEntity_089, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_089 = Partial<CreateUserDTO_089>;

export interface UserEntity_090 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_090 = Omit<UserEntity_090, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_090 = Partial<CreateUserDTO_090>;

export interface UserEntity_091 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_091 = Omit<UserEntity_091, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_091 = Partial<CreateUserDTO_091>;

export interface UserEntity_092 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_092 = Omit<UserEntity_092, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_092 = Partial<CreateUserDTO_092>;

export interface UserEntity_093 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_093 = Omit<UserEntity_093, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_093 = Partial<CreateUserDTO_093>;

export interface UserEntity_094 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_094 = Omit<UserEntity_094, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_094 = Partial<CreateUserDTO_094>;

export interface UserEntity_095 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_095 = Omit<UserEntity_095, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_095 = Partial<CreateUserDTO_095>;

export interface UserEntity_096 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_096 = Omit<UserEntity_096, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_096 = Partial<CreateUserDTO_096>;

export interface UserEntity_097 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_097 = Omit<UserEntity_097, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_097 = Partial<CreateUserDTO_097>;

export interface UserEntity_098 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_098 = Omit<UserEntity_098, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_098 = Partial<CreateUserDTO_098>;

export interface UserEntity_099 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_099 = Omit<UserEntity_099, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_099 = Partial<CreateUserDTO_099>;

export interface UserEntity_100 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_100 = Omit<UserEntity_100, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_100 = Partial<CreateUserDTO_100>;

export interface UserEntity_101 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_101 = Omit<UserEntity_101, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_101 = Partial<CreateUserDTO_101>;

export interface UserEntity_102 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_102 = Omit<UserEntity_102, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_102 = Partial<CreateUserDTO_102>;

export interface UserEntity_103 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_103 = Omit<UserEntity_103, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_103 = Partial<CreateUserDTO_103>;

export interface UserEntity_104 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_104 = Omit<UserEntity_104, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_104 = Partial<CreateUserDTO_104>;

export interface UserEntity_105 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_105 = Omit<UserEntity_105, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_105 = Partial<CreateUserDTO_105>;

export interface UserEntity_106 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_106 = Omit<UserEntity_106, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_106 = Partial<CreateUserDTO_106>;

export interface UserEntity_107 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_107 = Omit<UserEntity_107, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_107 = Partial<CreateUserDTO_107>;

export interface UserEntity_108 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_108 = Omit<UserEntity_108, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_108 = Partial<CreateUserDTO_108>;

export interface UserEntity_109 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_109 = Omit<UserEntity_109, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_109 = Partial<CreateUserDTO_109>;

export interface UserEntity_110 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_110 = Omit<UserEntity_110, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_110 = Partial<CreateUserDTO_110>;

export interface UserEntity_111 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_111 = Omit<UserEntity_111, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_111 = Partial<CreateUserDTO_111>;

export interface UserEntity_112 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_112 = Omit<UserEntity_112, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_112 = Partial<CreateUserDTO_112>;

export interface UserEntity_113 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_113 = Omit<UserEntity_113, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_113 = Partial<CreateUserDTO_113>;

export interface UserEntity_114 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_114 = Omit<UserEntity_114, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_114 = Partial<CreateUserDTO_114>;

export interface UserEntity_115 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_115 = Omit<UserEntity_115, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_115 = Partial<CreateUserDTO_115>;

export interface UserEntity_116 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_116 = Omit<UserEntity_116, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_116 = Partial<CreateUserDTO_116>;

export interface UserEntity_117 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_117 = Omit<UserEntity_117, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_117 = Partial<CreateUserDTO_117>;

export interface UserEntity_118 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_118 = Omit<UserEntity_118, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_118 = Partial<CreateUserDTO_118>;

export interface UserEntity_119 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_119 = Omit<UserEntity_119, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_119 = Partial<CreateUserDTO_119>;

export interface UserEntity_120 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_120 = Omit<UserEntity_120, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_120 = Partial<CreateUserDTO_120>;

export interface UserEntity_121 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_121 = Omit<UserEntity_121, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_121 = Partial<CreateUserDTO_121>;

export interface UserEntity_122 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_122 = Omit<UserEntity_122, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_122 = Partial<CreateUserDTO_122>;

export interface UserEntity_123 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_123 = Omit<UserEntity_123, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_123 = Partial<CreateUserDTO_123>;

export interface UserEntity_124 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_124 = Omit<UserEntity_124, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_124 = Partial<CreateUserDTO_124>;

export interface UserEntity_125 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_125 = Omit<UserEntity_125, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_125 = Partial<CreateUserDTO_125>;

export interface UserEntity_126 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_126 = Omit<UserEntity_126, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_126 = Partial<CreateUserDTO_126>;

export interface UserEntity_127 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_127 = Omit<UserEntity_127, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_127 = Partial<CreateUserDTO_127>;

export interface UserEntity_128 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_128 = Omit<UserEntity_128, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_128 = Partial<CreateUserDTO_128>;

export interface UserEntity_129 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_129 = Omit<UserEntity_129, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_129 = Partial<CreateUserDTO_129>;

export interface UserEntity_130 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_130 = Omit<UserEntity_130, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_130 = Partial<CreateUserDTO_130>;

export interface UserEntity_131 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_131 = Omit<UserEntity_131, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_131 = Partial<CreateUserDTO_131>;

export interface UserEntity_132 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_132 = Omit<UserEntity_132, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_132 = Partial<CreateUserDTO_132>;

export interface UserEntity_133 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_133 = Omit<UserEntity_133, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_133 = Partial<CreateUserDTO_133>;

export interface UserEntity_134 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_134 = Omit<UserEntity_134, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_134 = Partial<CreateUserDTO_134>;

export interface UserEntity_135 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_135 = Omit<UserEntity_135, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_135 = Partial<CreateUserDTO_135>;

export interface UserEntity_136 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_136 = Omit<UserEntity_136, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_136 = Partial<CreateUserDTO_136>;

export interface UserEntity_137 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_137 = Omit<UserEntity_137, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_137 = Partial<CreateUserDTO_137>;

export interface UserEntity_138 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_138 = Omit<UserEntity_138, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_138 = Partial<CreateUserDTO_138>;

export interface UserEntity_139 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_139 = Omit<UserEntity_139, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_139 = Partial<CreateUserDTO_139>;

export interface UserEntity_140 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_140 = Omit<UserEntity_140, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_140 = Partial<CreateUserDTO_140>;

export interface UserEntity_141 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_141 = Omit<UserEntity_141, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_141 = Partial<CreateUserDTO_141>;

export interface UserEntity_142 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_142 = Omit<UserEntity_142, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_142 = Partial<CreateUserDTO_142>;

export interface UserEntity_143 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_143 = Omit<UserEntity_143, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_143 = Partial<CreateUserDTO_143>;

export interface UserEntity_144 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_144 = Omit<UserEntity_144, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_144 = Partial<CreateUserDTO_144>;

export interface UserEntity_145 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_145 = Omit<UserEntity_145, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_145 = Partial<CreateUserDTO_145>;

export interface UserEntity_146 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_146 = Omit<UserEntity_146, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_146 = Partial<CreateUserDTO_146>;

export interface UserEntity_147 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_147 = Omit<UserEntity_147, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_147 = Partial<CreateUserDTO_147>;

export interface UserEntity_148 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_148 = Omit<UserEntity_148, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_148 = Partial<CreateUserDTO_148>;

export interface UserEntity_149 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_149 = Omit<UserEntity_149, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_149 = Partial<CreateUserDTO_149>;

export interface UserEntity_150 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_150 = Omit<UserEntity_150, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_150 = Partial<CreateUserDTO_150>;

export interface UserEntity_151 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_151 = Omit<UserEntity_151, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_151 = Partial<CreateUserDTO_151>;

export interface UserEntity_152 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_152 = Omit<UserEntity_152, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_152 = Partial<CreateUserDTO_152>;

export interface UserEntity_153 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_153 = Omit<UserEntity_153, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_153 = Partial<CreateUserDTO_153>;

export interface UserEntity_154 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_154 = Omit<UserEntity_154, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_154 = Partial<CreateUserDTO_154>;

export interface UserEntity_155 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_155 = Omit<UserEntity_155, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_155 = Partial<CreateUserDTO_155>;

export interface UserEntity_156 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_156 = Omit<UserEntity_156, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_156 = Partial<CreateUserDTO_156>;

export interface UserEntity_157 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_157 = Omit<UserEntity_157, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_157 = Partial<CreateUserDTO_157>;

export interface UserEntity_158 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_158 = Omit<UserEntity_158, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_158 = Partial<CreateUserDTO_158>;

export interface UserEntity_159 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_159 = Omit<UserEntity_159, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_159 = Partial<CreateUserDTO_159>;

export interface UserEntity_160 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_160 = Omit<UserEntity_160, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_160 = Partial<CreateUserDTO_160>;

export interface UserEntity_161 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_161 = Omit<UserEntity_161, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_161 = Partial<CreateUserDTO_161>;

export interface UserEntity_162 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_162 = Omit<UserEntity_162, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_162 = Partial<CreateUserDTO_162>;

export interface UserEntity_163 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_163 = Omit<UserEntity_163, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_163 = Partial<CreateUserDTO_163>;

export interface UserEntity_164 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_164 = Omit<UserEntity_164, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_164 = Partial<CreateUserDTO_164>;

export interface UserEntity_165 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_165 = Omit<UserEntity_165, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_165 = Partial<CreateUserDTO_165>;

export interface UserEntity_166 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_166 = Omit<UserEntity_166, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_166 = Partial<CreateUserDTO_166>;

export interface UserEntity_167 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_167 = Omit<UserEntity_167, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_167 = Partial<CreateUserDTO_167>;

export interface UserEntity_168 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_168 = Omit<UserEntity_168, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_168 = Partial<CreateUserDTO_168>;

export interface UserEntity_169 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_169 = Omit<UserEntity_169, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_169 = Partial<CreateUserDTO_169>;

export interface UserEntity_170 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_170 = Omit<UserEntity_170, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_170 = Partial<CreateUserDTO_170>;

export interface UserEntity_171 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_171 = Omit<UserEntity_171, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_171 = Partial<CreateUserDTO_171>;

export interface UserEntity_172 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_172 = Omit<UserEntity_172, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_172 = Partial<CreateUserDTO_172>;

export interface UserEntity_173 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_173 = Omit<UserEntity_173, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_173 = Partial<CreateUserDTO_173>;

export interface UserEntity_174 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_174 = Omit<UserEntity_174, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_174 = Partial<CreateUserDTO_174>;

export interface UserEntity_175 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_175 = Omit<UserEntity_175, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_175 = Partial<CreateUserDTO_175>;

export interface UserEntity_176 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_176 = Omit<UserEntity_176, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_176 = Partial<CreateUserDTO_176>;

export interface UserEntity_177 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_177 = Omit<UserEntity_177, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_177 = Partial<CreateUserDTO_177>;

export interface UserEntity_178 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_178 = Omit<UserEntity_178, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_178 = Partial<CreateUserDTO_178>;

export interface UserEntity_179 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_179 = Omit<UserEntity_179, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_179 = Partial<CreateUserDTO_179>;

export interface UserEntity_180 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_180 = Omit<UserEntity_180, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_180 = Partial<CreateUserDTO_180>;

export interface UserEntity_181 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_181 = Omit<UserEntity_181, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_181 = Partial<CreateUserDTO_181>;

export interface UserEntity_182 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_182 = Omit<UserEntity_182, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_182 = Partial<CreateUserDTO_182>;

export interface UserEntity_183 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_183 = Omit<UserEntity_183, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_183 = Partial<CreateUserDTO_183>;

export interface UserEntity_184 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_184 = Omit<UserEntity_184, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_184 = Partial<CreateUserDTO_184>;

export interface UserEntity_185 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_185 = Omit<UserEntity_185, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_185 = Partial<CreateUserDTO_185>;

export interface UserEntity_186 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_186 = Omit<UserEntity_186, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_186 = Partial<CreateUserDTO_186>;

export interface UserEntity_187 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_187 = Omit<UserEntity_187, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_187 = Partial<CreateUserDTO_187>;

export interface UserEntity_188 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_188 = Omit<UserEntity_188, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_188 = Partial<CreateUserDTO_188>;

export interface UserEntity_189 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_189 = Omit<UserEntity_189, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_189 = Partial<CreateUserDTO_189>;

export interface UserEntity_190 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_190 = Omit<UserEntity_190, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_190 = Partial<CreateUserDTO_190>;

export interface UserEntity_191 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_191 = Omit<UserEntity_191, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_191 = Partial<CreateUserDTO_191>;

export interface UserEntity_192 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_192 = Omit<UserEntity_192, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_192 = Partial<CreateUserDTO_192>;

export interface UserEntity_193 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_193 = Omit<UserEntity_193, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_193 = Partial<CreateUserDTO_193>;

export interface UserEntity_194 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_194 = Omit<UserEntity_194, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_194 = Partial<CreateUserDTO_194>;

export interface UserEntity_195 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_195 = Omit<UserEntity_195, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_195 = Partial<CreateUserDTO_195>;

export interface UserEntity_196 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_196 = Omit<UserEntity_196, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_196 = Partial<CreateUserDTO_196>;

export interface UserEntity_197 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_197 = Omit<UserEntity_197, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_197 = Partial<CreateUserDTO_197>;

export interface UserEntity_198 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_198 = Omit<UserEntity_198, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_198 = Partial<CreateUserDTO_198>;

export interface UserEntity_199 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_199 = Omit<UserEntity_199, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_199 = Partial<CreateUserDTO_199>;

export interface UserEntity_200 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_200 = Omit<UserEntity_200, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_200 = Partial<CreateUserDTO_200>;

export interface UserEntity_201 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_201 = Omit<UserEntity_201, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_201 = Partial<CreateUserDTO_201>;

export interface UserEntity_202 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_202 = Omit<UserEntity_202, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_202 = Partial<CreateUserDTO_202>;

export interface UserEntity_203 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_203 = Omit<UserEntity_203, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_203 = Partial<CreateUserDTO_203>;

export interface UserEntity_204 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_204 = Omit<UserEntity_204, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_204 = Partial<CreateUserDTO_204>;

export interface UserEntity_205 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_205 = Omit<UserEntity_205, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_205 = Partial<CreateUserDTO_205>;

export interface UserEntity_206 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_206 = Omit<UserEntity_206, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_206 = Partial<CreateUserDTO_206>;

export interface UserEntity_207 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_207 = Omit<UserEntity_207, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_207 = Partial<CreateUserDTO_207>;

export interface UserEntity_208 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_208 = Omit<UserEntity_208, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_208 = Partial<CreateUserDTO_208>;

export interface UserEntity_209 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_209 = Omit<UserEntity_209, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_209 = Partial<CreateUserDTO_209>;

export interface UserEntity_210 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_210 = Omit<UserEntity_210, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_210 = Partial<CreateUserDTO_210>;

export interface UserEntity_211 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_211 = Omit<UserEntity_211, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_211 = Partial<CreateUserDTO_211>;

export interface UserEntity_212 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_212 = Omit<UserEntity_212, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_212 = Partial<CreateUserDTO_212>;

export interface UserEntity_213 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_213 = Omit<UserEntity_213, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_213 = Partial<CreateUserDTO_213>;

export interface UserEntity_214 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_214 = Omit<UserEntity_214, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_214 = Partial<CreateUserDTO_214>;

export interface UserEntity_215 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_215 = Omit<UserEntity_215, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_215 = Partial<CreateUserDTO_215>;

export interface UserEntity_216 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_216 = Omit<UserEntity_216, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_216 = Partial<CreateUserDTO_216>;

export interface UserEntity_217 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_217 = Omit<UserEntity_217, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_217 = Partial<CreateUserDTO_217>;

export interface UserEntity_218 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_218 = Omit<UserEntity_218, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_218 = Partial<CreateUserDTO_218>;

export interface UserEntity_219 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_219 = Omit<UserEntity_219, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_219 = Partial<CreateUserDTO_219>;

export interface UserEntity_220 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_220 = Omit<UserEntity_220, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_220 = Partial<CreateUserDTO_220>;

export interface UserEntity_221 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_221 = Omit<UserEntity_221, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_221 = Partial<CreateUserDTO_221>;

export interface UserEntity_222 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_222 = Omit<UserEntity_222, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_222 = Partial<CreateUserDTO_222>;

export interface UserEntity_223 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_223 = Omit<UserEntity_223, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_223 = Partial<CreateUserDTO_223>;

export interface UserEntity_224 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_224 = Omit<UserEntity_224, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_224 = Partial<CreateUserDTO_224>;

export interface UserEntity_225 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_225 = Omit<UserEntity_225, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_225 = Partial<CreateUserDTO_225>;

export interface UserEntity_226 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_226 = Omit<UserEntity_226, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_226 = Partial<CreateUserDTO_226>;

export interface UserEntity_227 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_227 = Omit<UserEntity_227, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_227 = Partial<CreateUserDTO_227>;

export interface UserEntity_228 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_228 = Omit<UserEntity_228, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_228 = Partial<CreateUserDTO_228>;

export interface UserEntity_229 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_229 = Omit<UserEntity_229, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_229 = Partial<CreateUserDTO_229>;

export interface UserEntity_230 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_230 = Omit<UserEntity_230, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_230 = Partial<CreateUserDTO_230>;

export interface UserEntity_231 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_231 = Omit<UserEntity_231, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_231 = Partial<CreateUserDTO_231>;

export interface UserEntity_232 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_232 = Omit<UserEntity_232, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_232 = Partial<CreateUserDTO_232>;

export interface UserEntity_233 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_233 = Omit<UserEntity_233, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_233 = Partial<CreateUserDTO_233>;

export interface UserEntity_234 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_234 = Omit<UserEntity_234, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_234 = Partial<CreateUserDTO_234>;

export interface UserEntity_235 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_235 = Omit<UserEntity_235, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_235 = Partial<CreateUserDTO_235>;

export interface UserEntity_236 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_236 = Omit<UserEntity_236, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_236 = Partial<CreateUserDTO_236>;

export interface UserEntity_237 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_237 = Omit<UserEntity_237, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_237 = Partial<CreateUserDTO_237>;

export interface UserEntity_238 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_238 = Omit<UserEntity_238, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_238 = Partial<CreateUserDTO_238>;

export interface UserEntity_239 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_239 = Omit<UserEntity_239, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_239 = Partial<CreateUserDTO_239>;

export interface UserEntity_240 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_240 = Omit<UserEntity_240, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_240 = Partial<CreateUserDTO_240>;

export interface UserEntity_241 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_241 = Omit<UserEntity_241, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_241 = Partial<CreateUserDTO_241>;

export interface UserEntity_242 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_242 = Omit<UserEntity_242, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_242 = Partial<CreateUserDTO_242>;

export interface UserEntity_243 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_243 = Omit<UserEntity_243, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_243 = Partial<CreateUserDTO_243>;

export interface UserEntity_244 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_244 = Omit<UserEntity_244, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_244 = Partial<CreateUserDTO_244>;

export interface UserEntity_245 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_245 = Omit<UserEntity_245, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_245 = Partial<CreateUserDTO_245>;

export interface UserEntity_246 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_246 = Omit<UserEntity_246, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_246 = Partial<CreateUserDTO_246>;

export interface UserEntity_247 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_247 = Omit<UserEntity_247, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_247 = Partial<CreateUserDTO_247>;

export interface UserEntity_248 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_248 = Omit<UserEntity_248, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_248 = Partial<CreateUserDTO_248>;

export interface UserEntity_249 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_249 = Omit<UserEntity_249, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_249 = Partial<CreateUserDTO_249>;

export interface UserEntity_250 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_250 = Omit<UserEntity_250, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_250 = Partial<CreateUserDTO_250>;

export interface UserEntity_251 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_251 = Omit<UserEntity_251, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_251 = Partial<CreateUserDTO_251>;

export interface UserEntity_252 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_252 = Omit<UserEntity_252, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_252 = Partial<CreateUserDTO_252>;

export interface UserEntity_253 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_253 = Omit<UserEntity_253, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_253 = Partial<CreateUserDTO_253>;

export interface UserEntity_254 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_254 = Omit<UserEntity_254, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_254 = Partial<CreateUserDTO_254>;

export interface UserEntity_255 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_255 = Omit<UserEntity_255, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_255 = Partial<CreateUserDTO_255>;

export interface UserEntity_256 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_256 = Omit<UserEntity_256, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_256 = Partial<CreateUserDTO_256>;

export interface UserEntity_257 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_257 = Omit<UserEntity_257, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_257 = Partial<CreateUserDTO_257>;

export interface UserEntity_258 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_258 = Omit<UserEntity_258, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_258 = Partial<CreateUserDTO_258>;

export interface UserEntity_259 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_259 = Omit<UserEntity_259, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_259 = Partial<CreateUserDTO_259>;

export interface UserEntity_260 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_260 = Omit<UserEntity_260, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_260 = Partial<CreateUserDTO_260>;

export interface UserEntity_261 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_261 = Omit<UserEntity_261, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_261 = Partial<CreateUserDTO_261>;

export interface UserEntity_262 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_262 = Omit<UserEntity_262, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_262 = Partial<CreateUserDTO_262>;

export interface UserEntity_263 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_263 = Omit<UserEntity_263, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_263 = Partial<CreateUserDTO_263>;

export interface UserEntity_264 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_264 = Omit<UserEntity_264, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_264 = Partial<CreateUserDTO_264>;

export interface UserEntity_265 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_265 = Omit<UserEntity_265, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_265 = Partial<CreateUserDTO_265>;

export interface UserEntity_266 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_266 = Omit<UserEntity_266, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_266 = Partial<CreateUserDTO_266>;

export interface UserEntity_267 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_267 = Omit<UserEntity_267, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_267 = Partial<CreateUserDTO_267>;

export interface UserEntity_268 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_268 = Omit<UserEntity_268, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_268 = Partial<CreateUserDTO_268>;

export interface UserEntity_269 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_269 = Omit<UserEntity_269, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_269 = Partial<CreateUserDTO_269>;

export interface UserEntity_270 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_270 = Omit<UserEntity_270, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_270 = Partial<CreateUserDTO_270>;

export interface UserEntity_271 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_271 = Omit<UserEntity_271, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_271 = Partial<CreateUserDTO_271>;

export interface UserEntity_272 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_272 = Omit<UserEntity_272, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_272 = Partial<CreateUserDTO_272>;

export interface UserEntity_273 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_273 = Omit<UserEntity_273, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_273 = Partial<CreateUserDTO_273>;

export interface UserEntity_274 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_274 = Omit<UserEntity_274, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_274 = Partial<CreateUserDTO_274>;

export interface UserEntity_275 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_275 = Omit<UserEntity_275, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_275 = Partial<CreateUserDTO_275>;

export interface UserEntity_276 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_276 = Omit<UserEntity_276, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_276 = Partial<CreateUserDTO_276>;

export interface UserEntity_277 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_277 = Omit<UserEntity_277, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_277 = Partial<CreateUserDTO_277>;

export interface UserEntity_278 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_278 = Omit<UserEntity_278, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_278 = Partial<CreateUserDTO_278>;

export interface UserEntity_279 {
  id: string;
  uuid: string;
  email: string;
  roleId: number;
  tenantCode: string;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileId?: string;
  addressCount: number;
  lastLoginAt?: Date;
  securityHash: string;
  permissionsList: string[];
  attributes: Record<string, string>;
  preferences: {
    newsletter: boolean;
    smsNotifications: boolean;
    theme: 'light' | 'dark';
    currency: string;
  };
}
export type CreateUserDTO_279 = Omit<UserEntity_279, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateUserDTO_279 = Partial<CreateUserDTO_279>;

export interface ProductEntity_001 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_001 = Omit<ProductEntity_001, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_001 = Partial<CreateProductDTO_001>;

export interface ProductEntity_002 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_002 = Omit<ProductEntity_002, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_002 = Partial<CreateProductDTO_002>;

export interface ProductEntity_003 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_003 = Omit<ProductEntity_003, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_003 = Partial<CreateProductDTO_003>;

export interface ProductEntity_004 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_004 = Omit<ProductEntity_004, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_004 = Partial<CreateProductDTO_004>;

export interface ProductEntity_005 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_005 = Omit<ProductEntity_005, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_005 = Partial<CreateProductDTO_005>;

export interface ProductEntity_006 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_006 = Omit<ProductEntity_006, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_006 = Partial<CreateProductDTO_006>;

export interface ProductEntity_007 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_007 = Omit<ProductEntity_007, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_007 = Partial<CreateProductDTO_007>;

export interface ProductEntity_008 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_008 = Omit<ProductEntity_008, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_008 = Partial<CreateProductDTO_008>;

export interface ProductEntity_009 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_009 = Omit<ProductEntity_009, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_009 = Partial<CreateProductDTO_009>;

export interface ProductEntity_010 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_010 = Omit<ProductEntity_010, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_010 = Partial<CreateProductDTO_010>;

export interface ProductEntity_011 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_011 = Omit<ProductEntity_011, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_011 = Partial<CreateProductDTO_011>;

export interface ProductEntity_012 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_012 = Omit<ProductEntity_012, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_012 = Partial<CreateProductDTO_012>;

export interface ProductEntity_013 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_013 = Omit<ProductEntity_013, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_013 = Partial<CreateProductDTO_013>;

export interface ProductEntity_014 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_014 = Omit<ProductEntity_014, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_014 = Partial<CreateProductDTO_014>;

export interface ProductEntity_015 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_015 = Omit<ProductEntity_015, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_015 = Partial<CreateProductDTO_015>;

export interface ProductEntity_016 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_016 = Omit<ProductEntity_016, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_016 = Partial<CreateProductDTO_016>;

export interface ProductEntity_017 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_017 = Omit<ProductEntity_017, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_017 = Partial<CreateProductDTO_017>;

export interface ProductEntity_018 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_018 = Omit<ProductEntity_018, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_018 = Partial<CreateProductDTO_018>;

export interface ProductEntity_019 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_019 = Omit<ProductEntity_019, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_019 = Partial<CreateProductDTO_019>;

export interface ProductEntity_020 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_020 = Omit<ProductEntity_020, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_020 = Partial<CreateProductDTO_020>;

export interface ProductEntity_021 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_021 = Omit<ProductEntity_021, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_021 = Partial<CreateProductDTO_021>;

export interface ProductEntity_022 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_022 = Omit<ProductEntity_022, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_022 = Partial<CreateProductDTO_022>;

export interface ProductEntity_023 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_023 = Omit<ProductEntity_023, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_023 = Partial<CreateProductDTO_023>;

export interface ProductEntity_024 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_024 = Omit<ProductEntity_024, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_024 = Partial<CreateProductDTO_024>;

export interface ProductEntity_025 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_025 = Omit<ProductEntity_025, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_025 = Partial<CreateProductDTO_025>;

export interface ProductEntity_026 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_026 = Omit<ProductEntity_026, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_026 = Partial<CreateProductDTO_026>;

export interface ProductEntity_027 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_027 = Omit<ProductEntity_027, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_027 = Partial<CreateProductDTO_027>;

export interface ProductEntity_028 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_028 = Omit<ProductEntity_028, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_028 = Partial<CreateProductDTO_028>;

export interface ProductEntity_029 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_029 = Omit<ProductEntity_029, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_029 = Partial<CreateProductDTO_029>;

export interface ProductEntity_030 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_030 = Omit<ProductEntity_030, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_030 = Partial<CreateProductDTO_030>;

export interface ProductEntity_031 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_031 = Omit<ProductEntity_031, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_031 = Partial<CreateProductDTO_031>;

export interface ProductEntity_032 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_032 = Omit<ProductEntity_032, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_032 = Partial<CreateProductDTO_032>;

export interface ProductEntity_033 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_033 = Omit<ProductEntity_033, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_033 = Partial<CreateProductDTO_033>;

export interface ProductEntity_034 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_034 = Omit<ProductEntity_034, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_034 = Partial<CreateProductDTO_034>;

export interface ProductEntity_035 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_035 = Omit<ProductEntity_035, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_035 = Partial<CreateProductDTO_035>;

export interface ProductEntity_036 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_036 = Omit<ProductEntity_036, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_036 = Partial<CreateProductDTO_036>;

export interface ProductEntity_037 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_037 = Omit<ProductEntity_037, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_037 = Partial<CreateProductDTO_037>;

export interface ProductEntity_038 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_038 = Omit<ProductEntity_038, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_038 = Partial<CreateProductDTO_038>;

export interface ProductEntity_039 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_039 = Omit<ProductEntity_039, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_039 = Partial<CreateProductDTO_039>;

export interface ProductEntity_040 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_040 = Omit<ProductEntity_040, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_040 = Partial<CreateProductDTO_040>;

export interface ProductEntity_041 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_041 = Omit<ProductEntity_041, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_041 = Partial<CreateProductDTO_041>;

export interface ProductEntity_042 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_042 = Omit<ProductEntity_042, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_042 = Partial<CreateProductDTO_042>;

export interface ProductEntity_043 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_043 = Omit<ProductEntity_043, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_043 = Partial<CreateProductDTO_043>;

export interface ProductEntity_044 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_044 = Omit<ProductEntity_044, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_044 = Partial<CreateProductDTO_044>;

export interface ProductEntity_045 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_045 = Omit<ProductEntity_045, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_045 = Partial<CreateProductDTO_045>;

export interface ProductEntity_046 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_046 = Omit<ProductEntity_046, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_046 = Partial<CreateProductDTO_046>;

export interface ProductEntity_047 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_047 = Omit<ProductEntity_047, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_047 = Partial<CreateProductDTO_047>;

export interface ProductEntity_048 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_048 = Omit<ProductEntity_048, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_048 = Partial<CreateProductDTO_048>;

export interface ProductEntity_049 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_049 = Omit<ProductEntity_049, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_049 = Partial<CreateProductDTO_049>;

export interface ProductEntity_050 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_050 = Omit<ProductEntity_050, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_050 = Partial<CreateProductDTO_050>;

export interface ProductEntity_051 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_051 = Omit<ProductEntity_051, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_051 = Partial<CreateProductDTO_051>;

export interface ProductEntity_052 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_052 = Omit<ProductEntity_052, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_052 = Partial<CreateProductDTO_052>;

export interface ProductEntity_053 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_053 = Omit<ProductEntity_053, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_053 = Partial<CreateProductDTO_053>;

export interface ProductEntity_054 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_054 = Omit<ProductEntity_054, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_054 = Partial<CreateProductDTO_054>;

export interface ProductEntity_055 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_055 = Omit<ProductEntity_055, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_055 = Partial<CreateProductDTO_055>;

export interface ProductEntity_056 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_056 = Omit<ProductEntity_056, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_056 = Partial<CreateProductDTO_056>;

export interface ProductEntity_057 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_057 = Omit<ProductEntity_057, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_057 = Partial<CreateProductDTO_057>;

export interface ProductEntity_058 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_058 = Omit<ProductEntity_058, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_058 = Partial<CreateProductDTO_058>;

export interface ProductEntity_059 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_059 = Omit<ProductEntity_059, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_059 = Partial<CreateProductDTO_059>;

export interface ProductEntity_060 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_060 = Omit<ProductEntity_060, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_060 = Partial<CreateProductDTO_060>;

export interface ProductEntity_061 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_061 = Omit<ProductEntity_061, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_061 = Partial<CreateProductDTO_061>;

export interface ProductEntity_062 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_062 = Omit<ProductEntity_062, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_062 = Partial<CreateProductDTO_062>;

export interface ProductEntity_063 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_063 = Omit<ProductEntity_063, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_063 = Partial<CreateProductDTO_063>;

export interface ProductEntity_064 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_064 = Omit<ProductEntity_064, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_064 = Partial<CreateProductDTO_064>;

export interface ProductEntity_065 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_065 = Omit<ProductEntity_065, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_065 = Partial<CreateProductDTO_065>;

export interface ProductEntity_066 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_066 = Omit<ProductEntity_066, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_066 = Partial<CreateProductDTO_066>;

export interface ProductEntity_067 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_067 = Omit<ProductEntity_067, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_067 = Partial<CreateProductDTO_067>;

export interface ProductEntity_068 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_068 = Omit<ProductEntity_068, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_068 = Partial<CreateProductDTO_068>;

export interface ProductEntity_069 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_069 = Omit<ProductEntity_069, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_069 = Partial<CreateProductDTO_069>;

export interface ProductEntity_070 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_070 = Omit<ProductEntity_070, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_070 = Partial<CreateProductDTO_070>;

export interface ProductEntity_071 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_071 = Omit<ProductEntity_071, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_071 = Partial<CreateProductDTO_071>;

export interface ProductEntity_072 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_072 = Omit<ProductEntity_072, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_072 = Partial<CreateProductDTO_072>;

export interface ProductEntity_073 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_073 = Omit<ProductEntity_073, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_073 = Partial<CreateProductDTO_073>;

export interface ProductEntity_074 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_074 = Omit<ProductEntity_074, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_074 = Partial<CreateProductDTO_074>;

export interface ProductEntity_075 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_075 = Omit<ProductEntity_075, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_075 = Partial<CreateProductDTO_075>;

export interface ProductEntity_076 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_076 = Omit<ProductEntity_076, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_076 = Partial<CreateProductDTO_076>;

export interface ProductEntity_077 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_077 = Omit<ProductEntity_077, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_077 = Partial<CreateProductDTO_077>;

export interface ProductEntity_078 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_078 = Omit<ProductEntity_078, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_078 = Partial<CreateProductDTO_078>;

export interface ProductEntity_079 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_079 = Omit<ProductEntity_079, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_079 = Partial<CreateProductDTO_079>;

export interface ProductEntity_080 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_080 = Omit<ProductEntity_080, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_080 = Partial<CreateProductDTO_080>;

export interface ProductEntity_081 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_081 = Omit<ProductEntity_081, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_081 = Partial<CreateProductDTO_081>;

export interface ProductEntity_082 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_082 = Omit<ProductEntity_082, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_082 = Partial<CreateProductDTO_082>;

export interface ProductEntity_083 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_083 = Omit<ProductEntity_083, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_083 = Partial<CreateProductDTO_083>;

export interface ProductEntity_084 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_084 = Omit<ProductEntity_084, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_084 = Partial<CreateProductDTO_084>;

export interface ProductEntity_085 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_085 = Omit<ProductEntity_085, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_085 = Partial<CreateProductDTO_085>;

export interface ProductEntity_086 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_086 = Omit<ProductEntity_086, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_086 = Partial<CreateProductDTO_086>;

export interface ProductEntity_087 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_087 = Omit<ProductEntity_087, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_087 = Partial<CreateProductDTO_087>;

export interface ProductEntity_088 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_088 = Omit<ProductEntity_088, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_088 = Partial<CreateProductDTO_088>;

export interface ProductEntity_089 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_089 = Omit<ProductEntity_089, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_089 = Partial<CreateProductDTO_089>;

export interface ProductEntity_090 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_090 = Omit<ProductEntity_090, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_090 = Partial<CreateProductDTO_090>;

export interface ProductEntity_091 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_091 = Omit<ProductEntity_091, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_091 = Partial<CreateProductDTO_091>;

export interface ProductEntity_092 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_092 = Omit<ProductEntity_092, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_092 = Partial<CreateProductDTO_092>;

export interface ProductEntity_093 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_093 = Omit<ProductEntity_093, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_093 = Partial<CreateProductDTO_093>;

export interface ProductEntity_094 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_094 = Omit<ProductEntity_094, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_094 = Partial<CreateProductDTO_094>;

export interface ProductEntity_095 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_095 = Omit<ProductEntity_095, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_095 = Partial<CreateProductDTO_095>;

export interface ProductEntity_096 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_096 = Omit<ProductEntity_096, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_096 = Partial<CreateProductDTO_096>;

export interface ProductEntity_097 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_097 = Omit<ProductEntity_097, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_097 = Partial<CreateProductDTO_097>;

export interface ProductEntity_098 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_098 = Omit<ProductEntity_098, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_098 = Partial<CreateProductDTO_098>;

export interface ProductEntity_099 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_099 = Omit<ProductEntity_099, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_099 = Partial<CreateProductDTO_099>;

export interface ProductEntity_100 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_100 = Omit<ProductEntity_100, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_100 = Partial<CreateProductDTO_100>;

export interface ProductEntity_101 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_101 = Omit<ProductEntity_101, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_101 = Partial<CreateProductDTO_101>;

export interface ProductEntity_102 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_102 = Omit<ProductEntity_102, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_102 = Partial<CreateProductDTO_102>;

export interface ProductEntity_103 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_103 = Omit<ProductEntity_103, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_103 = Partial<CreateProductDTO_103>;

export interface ProductEntity_104 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_104 = Omit<ProductEntity_104, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_104 = Partial<CreateProductDTO_104>;

export interface ProductEntity_105 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_105 = Omit<ProductEntity_105, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_105 = Partial<CreateProductDTO_105>;

export interface ProductEntity_106 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_106 = Omit<ProductEntity_106, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_106 = Partial<CreateProductDTO_106>;

export interface ProductEntity_107 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_107 = Omit<ProductEntity_107, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_107 = Partial<CreateProductDTO_107>;

export interface ProductEntity_108 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_108 = Omit<ProductEntity_108, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_108 = Partial<CreateProductDTO_108>;

export interface ProductEntity_109 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_109 = Omit<ProductEntity_109, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_109 = Partial<CreateProductDTO_109>;

export interface ProductEntity_110 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_110 = Omit<ProductEntity_110, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_110 = Partial<CreateProductDTO_110>;

export interface ProductEntity_111 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_111 = Omit<ProductEntity_111, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_111 = Partial<CreateProductDTO_111>;

export interface ProductEntity_112 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_112 = Omit<ProductEntity_112, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_112 = Partial<CreateProductDTO_112>;

export interface ProductEntity_113 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_113 = Omit<ProductEntity_113, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_113 = Partial<CreateProductDTO_113>;

export interface ProductEntity_114 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_114 = Omit<ProductEntity_114, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_114 = Partial<CreateProductDTO_114>;

export interface ProductEntity_115 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_115 = Omit<ProductEntity_115, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_115 = Partial<CreateProductDTO_115>;

export interface ProductEntity_116 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_116 = Omit<ProductEntity_116, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_116 = Partial<CreateProductDTO_116>;

export interface ProductEntity_117 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_117 = Omit<ProductEntity_117, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_117 = Partial<CreateProductDTO_117>;

export interface ProductEntity_118 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_118 = Omit<ProductEntity_118, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_118 = Partial<CreateProductDTO_118>;

export interface ProductEntity_119 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_119 = Omit<ProductEntity_119, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_119 = Partial<CreateProductDTO_119>;

export interface ProductEntity_120 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_120 = Omit<ProductEntity_120, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_120 = Partial<CreateProductDTO_120>;

export interface ProductEntity_121 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_121 = Omit<ProductEntity_121, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_121 = Partial<CreateProductDTO_121>;

export interface ProductEntity_122 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_122 = Omit<ProductEntity_122, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_122 = Partial<CreateProductDTO_122>;

export interface ProductEntity_123 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_123 = Omit<ProductEntity_123, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_123 = Partial<CreateProductDTO_123>;

export interface ProductEntity_124 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_124 = Omit<ProductEntity_124, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_124 = Partial<CreateProductDTO_124>;

export interface ProductEntity_125 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_125 = Omit<ProductEntity_125, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_125 = Partial<CreateProductDTO_125>;

export interface ProductEntity_126 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_126 = Omit<ProductEntity_126, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_126 = Partial<CreateProductDTO_126>;

export interface ProductEntity_127 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_127 = Omit<ProductEntity_127, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_127 = Partial<CreateProductDTO_127>;

export interface ProductEntity_128 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_128 = Omit<ProductEntity_128, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_128 = Partial<CreateProductDTO_128>;

export interface ProductEntity_129 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_129 = Omit<ProductEntity_129, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_129 = Partial<CreateProductDTO_129>;

export interface ProductEntity_130 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_130 = Omit<ProductEntity_130, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_130 = Partial<CreateProductDTO_130>;

export interface ProductEntity_131 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_131 = Omit<ProductEntity_131, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_131 = Partial<CreateProductDTO_131>;

export interface ProductEntity_132 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_132 = Omit<ProductEntity_132, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_132 = Partial<CreateProductDTO_132>;

export interface ProductEntity_133 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_133 = Omit<ProductEntity_133, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_133 = Partial<CreateProductDTO_133>;

export interface ProductEntity_134 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_134 = Omit<ProductEntity_134, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_134 = Partial<CreateProductDTO_134>;

export interface ProductEntity_135 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_135 = Omit<ProductEntity_135, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_135 = Partial<CreateProductDTO_135>;

export interface ProductEntity_136 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_136 = Omit<ProductEntity_136, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_136 = Partial<CreateProductDTO_136>;

export interface ProductEntity_137 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_137 = Omit<ProductEntity_137, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_137 = Partial<CreateProductDTO_137>;

export interface ProductEntity_138 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_138 = Omit<ProductEntity_138, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_138 = Partial<CreateProductDTO_138>;

export interface ProductEntity_139 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_139 = Omit<ProductEntity_139, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_139 = Partial<CreateProductDTO_139>;

export interface ProductEntity_140 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_140 = Omit<ProductEntity_140, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_140 = Partial<CreateProductDTO_140>;

export interface ProductEntity_141 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_141 = Omit<ProductEntity_141, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_141 = Partial<CreateProductDTO_141>;

export interface ProductEntity_142 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_142 = Omit<ProductEntity_142, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_142 = Partial<CreateProductDTO_142>;

export interface ProductEntity_143 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_143 = Omit<ProductEntity_143, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_143 = Partial<CreateProductDTO_143>;

export interface ProductEntity_144 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_144 = Omit<ProductEntity_144, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_144 = Partial<CreateProductDTO_144>;

export interface ProductEntity_145 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_145 = Omit<ProductEntity_145, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_145 = Partial<CreateProductDTO_145>;

export interface ProductEntity_146 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_146 = Omit<ProductEntity_146, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_146 = Partial<CreateProductDTO_146>;

export interface ProductEntity_147 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_147 = Omit<ProductEntity_147, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_147 = Partial<CreateProductDTO_147>;

export interface ProductEntity_148 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_148 = Omit<ProductEntity_148, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_148 = Partial<CreateProductDTO_148>;

export interface ProductEntity_149 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_149 = Omit<ProductEntity_149, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_149 = Partial<CreateProductDTO_149>;

export interface ProductEntity_150 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_150 = Omit<ProductEntity_150, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_150 = Partial<CreateProductDTO_150>;

export interface ProductEntity_151 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_151 = Omit<ProductEntity_151, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_151 = Partial<CreateProductDTO_151>;

export interface ProductEntity_152 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_152 = Omit<ProductEntity_152, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_152 = Partial<CreateProductDTO_152>;

export interface ProductEntity_153 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_153 = Omit<ProductEntity_153, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_153 = Partial<CreateProductDTO_153>;

export interface ProductEntity_154 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_154 = Omit<ProductEntity_154, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_154 = Partial<CreateProductDTO_154>;

export interface ProductEntity_155 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_155 = Omit<ProductEntity_155, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_155 = Partial<CreateProductDTO_155>;

export interface ProductEntity_156 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_156 = Omit<ProductEntity_156, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_156 = Partial<CreateProductDTO_156>;

export interface ProductEntity_157 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_157 = Omit<ProductEntity_157, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_157 = Partial<CreateProductDTO_157>;

export interface ProductEntity_158 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_158 = Omit<ProductEntity_158, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_158 = Partial<CreateProductDTO_158>;

export interface ProductEntity_159 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_159 = Omit<ProductEntity_159, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_159 = Partial<CreateProductDTO_159>;

export interface ProductEntity_160 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_160 = Omit<ProductEntity_160, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_160 = Partial<CreateProductDTO_160>;

export interface ProductEntity_161 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_161 = Omit<ProductEntity_161, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_161 = Partial<CreateProductDTO_161>;

export interface ProductEntity_162 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_162 = Omit<ProductEntity_162, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_162 = Partial<CreateProductDTO_162>;

export interface ProductEntity_163 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_163 = Omit<ProductEntity_163, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_163 = Partial<CreateProductDTO_163>;

export interface ProductEntity_164 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_164 = Omit<ProductEntity_164, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_164 = Partial<CreateProductDTO_164>;

export interface ProductEntity_165 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_165 = Omit<ProductEntity_165, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_165 = Partial<CreateProductDTO_165>;

export interface ProductEntity_166 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_166 = Omit<ProductEntity_166, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_166 = Partial<CreateProductDTO_166>;

export interface ProductEntity_167 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_167 = Omit<ProductEntity_167, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_167 = Partial<CreateProductDTO_167>;

export interface ProductEntity_168 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_168 = Omit<ProductEntity_168, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_168 = Partial<CreateProductDTO_168>;

export interface ProductEntity_169 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_169 = Omit<ProductEntity_169, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_169 = Partial<CreateProductDTO_169>;

export interface ProductEntity_170 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_170 = Omit<ProductEntity_170, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_170 = Partial<CreateProductDTO_170>;

export interface ProductEntity_171 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_171 = Omit<ProductEntity_171, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_171 = Partial<CreateProductDTO_171>;

export interface ProductEntity_172 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_172 = Omit<ProductEntity_172, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_172 = Partial<CreateProductDTO_172>;

export interface ProductEntity_173 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_173 = Omit<ProductEntity_173, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_173 = Partial<CreateProductDTO_173>;

export interface ProductEntity_174 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_174 = Omit<ProductEntity_174, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_174 = Partial<CreateProductDTO_174>;

export interface ProductEntity_175 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_175 = Omit<ProductEntity_175, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_175 = Partial<CreateProductDTO_175>;

export interface ProductEntity_176 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_176 = Omit<ProductEntity_176, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_176 = Partial<CreateProductDTO_176>;

export interface ProductEntity_177 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_177 = Omit<ProductEntity_177, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_177 = Partial<CreateProductDTO_177>;

export interface ProductEntity_178 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_178 = Omit<ProductEntity_178, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_178 = Partial<CreateProductDTO_178>;

export interface ProductEntity_179 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_179 = Omit<ProductEntity_179, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_179 = Partial<CreateProductDTO_179>;

export interface ProductEntity_180 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_180 = Omit<ProductEntity_180, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_180 = Partial<CreateProductDTO_180>;

export interface ProductEntity_181 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_181 = Omit<ProductEntity_181, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_181 = Partial<CreateProductDTO_181>;

export interface ProductEntity_182 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_182 = Omit<ProductEntity_182, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_182 = Partial<CreateProductDTO_182>;

export interface ProductEntity_183 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_183 = Omit<ProductEntity_183, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_183 = Partial<CreateProductDTO_183>;

export interface ProductEntity_184 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_184 = Omit<ProductEntity_184, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_184 = Partial<CreateProductDTO_184>;

export interface ProductEntity_185 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_185 = Omit<ProductEntity_185, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_185 = Partial<CreateProductDTO_185>;

export interface ProductEntity_186 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_186 = Omit<ProductEntity_186, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_186 = Partial<CreateProductDTO_186>;

export interface ProductEntity_187 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_187 = Omit<ProductEntity_187, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_187 = Partial<CreateProductDTO_187>;

export interface ProductEntity_188 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_188 = Omit<ProductEntity_188, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_188 = Partial<CreateProductDTO_188>;

export interface ProductEntity_189 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_189 = Omit<ProductEntity_189, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_189 = Partial<CreateProductDTO_189>;

export interface ProductEntity_190 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_190 = Omit<ProductEntity_190, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_190 = Partial<CreateProductDTO_190>;

export interface ProductEntity_191 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_191 = Omit<ProductEntity_191, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_191 = Partial<CreateProductDTO_191>;

export interface ProductEntity_192 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_192 = Omit<ProductEntity_192, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_192 = Partial<CreateProductDTO_192>;

export interface ProductEntity_193 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_193 = Omit<ProductEntity_193, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_193 = Partial<CreateProductDTO_193>;

export interface ProductEntity_194 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_194 = Omit<ProductEntity_194, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_194 = Partial<CreateProductDTO_194>;

export interface ProductEntity_195 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_195 = Omit<ProductEntity_195, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_195 = Partial<CreateProductDTO_195>;

export interface ProductEntity_196 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_196 = Omit<ProductEntity_196, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_196 = Partial<CreateProductDTO_196>;

export interface ProductEntity_197 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_197 = Omit<ProductEntity_197, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_197 = Partial<CreateProductDTO_197>;

export interface ProductEntity_198 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_198 = Omit<ProductEntity_198, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_198 = Partial<CreateProductDTO_198>;

export interface ProductEntity_199 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_199 = Omit<ProductEntity_199, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_199 = Partial<CreateProductDTO_199>;

export interface ProductEntity_200 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_200 = Omit<ProductEntity_200, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_200 = Partial<CreateProductDTO_200>;

export interface ProductEntity_201 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_201 = Omit<ProductEntity_201, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_201 = Partial<CreateProductDTO_201>;

export interface ProductEntity_202 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_202 = Omit<ProductEntity_202, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_202 = Partial<CreateProductDTO_202>;

export interface ProductEntity_203 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_203 = Omit<ProductEntity_203, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_203 = Partial<CreateProductDTO_203>;

export interface ProductEntity_204 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_204 = Omit<ProductEntity_204, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_204 = Partial<CreateProductDTO_204>;

export interface ProductEntity_205 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_205 = Omit<ProductEntity_205, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_205 = Partial<CreateProductDTO_205>;

export interface ProductEntity_206 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_206 = Omit<ProductEntity_206, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_206 = Partial<CreateProductDTO_206>;

export interface ProductEntity_207 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_207 = Omit<ProductEntity_207, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_207 = Partial<CreateProductDTO_207>;

export interface ProductEntity_208 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_208 = Omit<ProductEntity_208, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_208 = Partial<CreateProductDTO_208>;

export interface ProductEntity_209 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_209 = Omit<ProductEntity_209, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_209 = Partial<CreateProductDTO_209>;

export interface ProductEntity_210 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_210 = Omit<ProductEntity_210, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_210 = Partial<CreateProductDTO_210>;

export interface ProductEntity_211 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_211 = Omit<ProductEntity_211, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_211 = Partial<CreateProductDTO_211>;

export interface ProductEntity_212 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_212 = Omit<ProductEntity_212, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_212 = Partial<CreateProductDTO_212>;

export interface ProductEntity_213 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_213 = Omit<ProductEntity_213, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_213 = Partial<CreateProductDTO_213>;

export interface ProductEntity_214 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_214 = Omit<ProductEntity_214, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_214 = Partial<CreateProductDTO_214>;

export interface ProductEntity_215 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_215 = Omit<ProductEntity_215, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_215 = Partial<CreateProductDTO_215>;

export interface ProductEntity_216 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_216 = Omit<ProductEntity_216, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_216 = Partial<CreateProductDTO_216>;

export interface ProductEntity_217 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_217 = Omit<ProductEntity_217, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_217 = Partial<CreateProductDTO_217>;

export interface ProductEntity_218 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_218 = Omit<ProductEntity_218, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_218 = Partial<CreateProductDTO_218>;

export interface ProductEntity_219 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_219 = Omit<ProductEntity_219, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_219 = Partial<CreateProductDTO_219>;

export interface ProductEntity_220 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_220 = Omit<ProductEntity_220, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_220 = Partial<CreateProductDTO_220>;

export interface ProductEntity_221 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_221 = Omit<ProductEntity_221, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_221 = Partial<CreateProductDTO_221>;

export interface ProductEntity_222 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_222 = Omit<ProductEntity_222, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_222 = Partial<CreateProductDTO_222>;

export interface ProductEntity_223 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_223 = Omit<ProductEntity_223, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_223 = Partial<CreateProductDTO_223>;

export interface ProductEntity_224 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_224 = Omit<ProductEntity_224, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_224 = Partial<CreateProductDTO_224>;

export interface ProductEntity_225 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_225 = Omit<ProductEntity_225, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_225 = Partial<CreateProductDTO_225>;

export interface ProductEntity_226 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_226 = Omit<ProductEntity_226, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_226 = Partial<CreateProductDTO_226>;

export interface ProductEntity_227 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_227 = Omit<ProductEntity_227, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_227 = Partial<CreateProductDTO_227>;

export interface ProductEntity_228 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_228 = Omit<ProductEntity_228, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_228 = Partial<CreateProductDTO_228>;

export interface ProductEntity_229 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_229 = Omit<ProductEntity_229, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_229 = Partial<CreateProductDTO_229>;

export interface ProductEntity_230 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_230 = Omit<ProductEntity_230, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_230 = Partial<CreateProductDTO_230>;

export interface ProductEntity_231 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_231 = Omit<ProductEntity_231, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_231 = Partial<CreateProductDTO_231>;

export interface ProductEntity_232 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_232 = Omit<ProductEntity_232, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_232 = Partial<CreateProductDTO_232>;

export interface ProductEntity_233 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_233 = Omit<ProductEntity_233, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_233 = Partial<CreateProductDTO_233>;

export interface ProductEntity_234 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_234 = Omit<ProductEntity_234, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_234 = Partial<CreateProductDTO_234>;

export interface ProductEntity_235 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_235 = Omit<ProductEntity_235, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_235 = Partial<CreateProductDTO_235>;

export interface ProductEntity_236 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_236 = Omit<ProductEntity_236, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_236 = Partial<CreateProductDTO_236>;

export interface ProductEntity_237 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_237 = Omit<ProductEntity_237, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_237 = Partial<CreateProductDTO_237>;

export interface ProductEntity_238 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_238 = Omit<ProductEntity_238, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_238 = Partial<CreateProductDTO_238>;

export interface ProductEntity_239 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_239 = Omit<ProductEntity_239, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_239 = Partial<CreateProductDTO_239>;

export interface ProductEntity_240 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_240 = Omit<ProductEntity_240, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_240 = Partial<CreateProductDTO_240>;

export interface ProductEntity_241 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_241 = Omit<ProductEntity_241, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_241 = Partial<CreateProductDTO_241>;

export interface ProductEntity_242 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_242 = Omit<ProductEntity_242, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_242 = Partial<CreateProductDTO_242>;

export interface ProductEntity_243 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_243 = Omit<ProductEntity_243, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_243 = Partial<CreateProductDTO_243>;

export interface ProductEntity_244 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_244 = Omit<ProductEntity_244, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_244 = Partial<CreateProductDTO_244>;

export interface ProductEntity_245 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_245 = Omit<ProductEntity_245, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_245 = Partial<CreateProductDTO_245>;

export interface ProductEntity_246 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_246 = Omit<ProductEntity_246, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_246 = Partial<CreateProductDTO_246>;

export interface ProductEntity_247 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_247 = Omit<ProductEntity_247, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_247 = Partial<CreateProductDTO_247>;

export interface ProductEntity_248 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_248 = Omit<ProductEntity_248, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_248 = Partial<CreateProductDTO_248>;

export interface ProductEntity_249 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_249 = Omit<ProductEntity_249, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_249 = Partial<CreateProductDTO_249>;

export interface ProductEntity_250 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_250 = Omit<ProductEntity_250, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_250 = Partial<CreateProductDTO_250>;

export interface ProductEntity_251 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_251 = Omit<ProductEntity_251, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_251 = Partial<CreateProductDTO_251>;

export interface ProductEntity_252 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_252 = Omit<ProductEntity_252, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_252 = Partial<CreateProductDTO_252>;

export interface ProductEntity_253 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_253 = Omit<ProductEntity_253, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_253 = Partial<CreateProductDTO_253>;

export interface ProductEntity_254 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_254 = Omit<ProductEntity_254, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_254 = Partial<CreateProductDTO_254>;

export interface ProductEntity_255 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_255 = Omit<ProductEntity_255, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_255 = Partial<CreateProductDTO_255>;

export interface ProductEntity_256 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_256 = Omit<ProductEntity_256, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_256 = Partial<CreateProductDTO_256>;

export interface ProductEntity_257 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_257 = Omit<ProductEntity_257, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_257 = Partial<CreateProductDTO_257>;

export interface ProductEntity_258 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_258 = Omit<ProductEntity_258, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_258 = Partial<CreateProductDTO_258>;

export interface ProductEntity_259 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_259 = Omit<ProductEntity_259, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_259 = Partial<CreateProductDTO_259>;

export interface ProductEntity_260 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_260 = Omit<ProductEntity_260, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_260 = Partial<CreateProductDTO_260>;

export interface ProductEntity_261 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_261 = Omit<ProductEntity_261, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_261 = Partial<CreateProductDTO_261>;

export interface ProductEntity_262 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_262 = Omit<ProductEntity_262, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_262 = Partial<CreateProductDTO_262>;

export interface ProductEntity_263 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_263 = Omit<ProductEntity_263, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_263 = Partial<CreateProductDTO_263>;

export interface ProductEntity_264 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_264 = Omit<ProductEntity_264, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_264 = Partial<CreateProductDTO_264>;

export interface ProductEntity_265 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_265 = Omit<ProductEntity_265, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_265 = Partial<CreateProductDTO_265>;

export interface ProductEntity_266 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_266 = Omit<ProductEntity_266, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_266 = Partial<CreateProductDTO_266>;

export interface ProductEntity_267 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_267 = Omit<ProductEntity_267, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_267 = Partial<CreateProductDTO_267>;

export interface ProductEntity_268 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_268 = Omit<ProductEntity_268, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_268 = Partial<CreateProductDTO_268>;

export interface ProductEntity_269 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_269 = Omit<ProductEntity_269, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_269 = Partial<CreateProductDTO_269>;

export interface ProductEntity_270 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_270 = Omit<ProductEntity_270, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_270 = Partial<CreateProductDTO_270>;

export interface ProductEntity_271 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_271 = Omit<ProductEntity_271, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_271 = Partial<CreateProductDTO_271>;

export interface ProductEntity_272 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_272 = Omit<ProductEntity_272, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_272 = Partial<CreateProductDTO_272>;

export interface ProductEntity_273 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_273 = Omit<ProductEntity_273, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_273 = Partial<CreateProductDTO_273>;

export interface ProductEntity_274 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_274 = Omit<ProductEntity_274, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_274 = Partial<CreateProductDTO_274>;

export interface ProductEntity_275 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_275 = Omit<ProductEntity_275, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_275 = Partial<CreateProductDTO_275>;

export interface ProductEntity_276 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_276 = Omit<ProductEntity_276, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_276 = Partial<CreateProductDTO_276>;

export interface ProductEntity_277 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_277 = Omit<ProductEntity_277, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_277 = Partial<CreateProductDTO_277>;

export interface ProductEntity_278 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_278 = Omit<ProductEntity_278, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_278 = Partial<CreateProductDTO_278>;

export interface ProductEntity_279 {
  id: string;
  sku: string;
  barcode?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  brandId: string;
  categoryId: string;
  costPrice: number;
  listPrice: number;
  salePrice?: number;
  currency: string;
  stockQuantity: number;
  reservedQuantity: number;
  lowStockThreshold: number;
  isTaxable: boolean;
  taxClass: string;
  isPhysical: boolean;
  weightGrams?: number;
  heightMm?: number;
  widthMm?: number;
  depthMm?: number;
  ratingAverage: number;
  reviewCount: number;
  images: Array<{ id: string; url: string; isPrimary: boolean; altText: string }>;
  tags: string[];
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}
export type CreateProductDTO_279 = Omit<ProductEntity_279, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDTO_279 = Partial<CreateProductDTO_279>;
