-- Database DDL Schema Definitions for 120 Core Entities


CREATE TABLE tbl_entity_01 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_01_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_01_code ON tbl_entity_01 (entity_code);
CREATE INDEX idx_entity_01_status ON tbl_entity_01 (is_active, category_type);
CREATE INDEX idx_entity_01_created ON tbl_entity_01 (created_at DESC);


CREATE TABLE tbl_entity_02 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_02_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_02_code ON tbl_entity_02 (entity_code);
CREATE INDEX idx_entity_02_status ON tbl_entity_02 (is_active, category_type);
CREATE INDEX idx_entity_02_created ON tbl_entity_02 (created_at DESC);


CREATE TABLE tbl_entity_03 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_03_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_03_code ON tbl_entity_03 (entity_code);
CREATE INDEX idx_entity_03_status ON tbl_entity_03 (is_active, category_type);
CREATE INDEX idx_entity_03_created ON tbl_entity_03 (created_at DESC);


CREATE TABLE tbl_entity_04 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_04_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_04_code ON tbl_entity_04 (entity_code);
CREATE INDEX idx_entity_04_status ON tbl_entity_04 (is_active, category_type);
CREATE INDEX idx_entity_04_created ON tbl_entity_04 (created_at DESC);


CREATE TABLE tbl_entity_05 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_05_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_05_code ON tbl_entity_05 (entity_code);
CREATE INDEX idx_entity_05_status ON tbl_entity_05 (is_active, category_type);
CREATE INDEX idx_entity_05_created ON tbl_entity_05 (created_at DESC);


CREATE TABLE tbl_entity_06 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_06_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_06_code ON tbl_entity_06 (entity_code);
CREATE INDEX idx_entity_06_status ON tbl_entity_06 (is_active, category_type);
CREATE INDEX idx_entity_06_created ON tbl_entity_06 (created_at DESC);


CREATE TABLE tbl_entity_07 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_07_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_07_code ON tbl_entity_07 (entity_code);
CREATE INDEX idx_entity_07_status ON tbl_entity_07 (is_active, category_type);
CREATE INDEX idx_entity_07_created ON tbl_entity_07 (created_at DESC);


CREATE TABLE tbl_entity_08 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_08_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_08_code ON tbl_entity_08 (entity_code);
CREATE INDEX idx_entity_08_status ON tbl_entity_08 (is_active, category_type);
CREATE INDEX idx_entity_08_created ON tbl_entity_08 (created_at DESC);


CREATE TABLE tbl_entity_09 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_09_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_09_code ON tbl_entity_09 (entity_code);
CREATE INDEX idx_entity_09_status ON tbl_entity_09 (is_active, category_type);
CREATE INDEX idx_entity_09_created ON tbl_entity_09 (created_at DESC);


CREATE TABLE tbl_entity_10 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_10_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_10_code ON tbl_entity_10 (entity_code);
CREATE INDEX idx_entity_10_status ON tbl_entity_10 (is_active, category_type);
CREATE INDEX idx_entity_10_created ON tbl_entity_10 (created_at DESC);


CREATE TABLE tbl_entity_11 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_11_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_11_code ON tbl_entity_11 (entity_code);
CREATE INDEX idx_entity_11_status ON tbl_entity_11 (is_active, category_type);
CREATE INDEX idx_entity_11_created ON tbl_entity_11 (created_at DESC);


CREATE TABLE tbl_entity_12 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_12_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_12_code ON tbl_entity_12 (entity_code);
CREATE INDEX idx_entity_12_status ON tbl_entity_12 (is_active, category_type);
CREATE INDEX idx_entity_12_created ON tbl_entity_12 (created_at DESC);


CREATE TABLE tbl_entity_13 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_13_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_13_code ON tbl_entity_13 (entity_code);
CREATE INDEX idx_entity_13_status ON tbl_entity_13 (is_active, category_type);
CREATE INDEX idx_entity_13_created ON tbl_entity_13 (created_at DESC);


CREATE TABLE tbl_entity_14 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_14_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_14_code ON tbl_entity_14 (entity_code);
CREATE INDEX idx_entity_14_status ON tbl_entity_14 (is_active, category_type);
CREATE INDEX idx_entity_14_created ON tbl_entity_14 (created_at DESC);


CREATE TABLE tbl_entity_15 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_15_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_15_code ON tbl_entity_15 (entity_code);
CREATE INDEX idx_entity_15_status ON tbl_entity_15 (is_active, category_type);
CREATE INDEX idx_entity_15_created ON tbl_entity_15 (created_at DESC);


CREATE TABLE tbl_entity_16 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_16_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_16_code ON tbl_entity_16 (entity_code);
CREATE INDEX idx_entity_16_status ON tbl_entity_16 (is_active, category_type);
CREATE INDEX idx_entity_16_created ON tbl_entity_16 (created_at DESC);


CREATE TABLE tbl_entity_17 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_17_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_17_code ON tbl_entity_17 (entity_code);
CREATE INDEX idx_entity_17_status ON tbl_entity_17 (is_active, category_type);
CREATE INDEX idx_entity_17_created ON tbl_entity_17 (created_at DESC);


CREATE TABLE tbl_entity_18 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_18_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_18_code ON tbl_entity_18 (entity_code);
CREATE INDEX idx_entity_18_status ON tbl_entity_18 (is_active, category_type);
CREATE INDEX idx_entity_18_created ON tbl_entity_18 (created_at DESC);


CREATE TABLE tbl_entity_19 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_19_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_19_code ON tbl_entity_19 (entity_code);
CREATE INDEX idx_entity_19_status ON tbl_entity_19 (is_active, category_type);
CREATE INDEX idx_entity_19_created ON tbl_entity_19 (created_at DESC);


CREATE TABLE tbl_entity_20 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_20_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_20_code ON tbl_entity_20 (entity_code);
CREATE INDEX idx_entity_20_status ON tbl_entity_20 (is_active, category_type);
CREATE INDEX idx_entity_20_created ON tbl_entity_20 (created_at DESC);


CREATE TABLE tbl_entity_21 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_21_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_21_code ON tbl_entity_21 (entity_code);
CREATE INDEX idx_entity_21_status ON tbl_entity_21 (is_active, category_type);
CREATE INDEX idx_entity_21_created ON tbl_entity_21 (created_at DESC);


CREATE TABLE tbl_entity_22 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_22_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_22_code ON tbl_entity_22 (entity_code);
CREATE INDEX idx_entity_22_status ON tbl_entity_22 (is_active, category_type);
CREATE INDEX idx_entity_22_created ON tbl_entity_22 (created_at DESC);


CREATE TABLE tbl_entity_23 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_23_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_23_code ON tbl_entity_23 (entity_code);
CREATE INDEX idx_entity_23_status ON tbl_entity_23 (is_active, category_type);
CREATE INDEX idx_entity_23_created ON tbl_entity_23 (created_at DESC);


CREATE TABLE tbl_entity_24 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_24_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_24_code ON tbl_entity_24 (entity_code);
CREATE INDEX idx_entity_24_status ON tbl_entity_24 (is_active, category_type);
CREATE INDEX idx_entity_24_created ON tbl_entity_24 (created_at DESC);


CREATE TABLE tbl_entity_25 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_25_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_25_code ON tbl_entity_25 (entity_code);
CREATE INDEX idx_entity_25_status ON tbl_entity_25 (is_active, category_type);
CREATE INDEX idx_entity_25_created ON tbl_entity_25 (created_at DESC);


CREATE TABLE tbl_entity_26 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_26_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_26_code ON tbl_entity_26 (entity_code);
CREATE INDEX idx_entity_26_status ON tbl_entity_26 (is_active, category_type);
CREATE INDEX idx_entity_26_created ON tbl_entity_26 (created_at DESC);


CREATE TABLE tbl_entity_27 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_27_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_27_code ON tbl_entity_27 (entity_code);
CREATE INDEX idx_entity_27_status ON tbl_entity_27 (is_active, category_type);
CREATE INDEX idx_entity_27_created ON tbl_entity_27 (created_at DESC);


CREATE TABLE tbl_entity_28 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_28_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_28_code ON tbl_entity_28 (entity_code);
CREATE INDEX idx_entity_28_status ON tbl_entity_28 (is_active, category_type);
CREATE INDEX idx_entity_28_created ON tbl_entity_28 (created_at DESC);


CREATE TABLE tbl_entity_29 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_29_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_29_code ON tbl_entity_29 (entity_code);
CREATE INDEX idx_entity_29_status ON tbl_entity_29 (is_active, category_type);
CREATE INDEX idx_entity_29_created ON tbl_entity_29 (created_at DESC);


CREATE TABLE tbl_entity_30 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_30_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_30_code ON tbl_entity_30 (entity_code);
CREATE INDEX idx_entity_30_status ON tbl_entity_30 (is_active, category_type);
CREATE INDEX idx_entity_30_created ON tbl_entity_30 (created_at DESC);


CREATE TABLE tbl_entity_31 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_31_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_31_code ON tbl_entity_31 (entity_code);
CREATE INDEX idx_entity_31_status ON tbl_entity_31 (is_active, category_type);
CREATE INDEX idx_entity_31_created ON tbl_entity_31 (created_at DESC);


CREATE TABLE tbl_entity_32 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_32_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_32_code ON tbl_entity_32 (entity_code);
CREATE INDEX idx_entity_32_status ON tbl_entity_32 (is_active, category_type);
CREATE INDEX idx_entity_32_created ON tbl_entity_32 (created_at DESC);


CREATE TABLE tbl_entity_33 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_33_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_33_code ON tbl_entity_33 (entity_code);
CREATE INDEX idx_entity_33_status ON tbl_entity_33 (is_active, category_type);
CREATE INDEX idx_entity_33_created ON tbl_entity_33 (created_at DESC);


CREATE TABLE tbl_entity_34 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_34_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_34_code ON tbl_entity_34 (entity_code);
CREATE INDEX idx_entity_34_status ON tbl_entity_34 (is_active, category_type);
CREATE INDEX idx_entity_34_created ON tbl_entity_34 (created_at DESC);


CREATE TABLE tbl_entity_35 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_35_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_35_code ON tbl_entity_35 (entity_code);
CREATE INDEX idx_entity_35_status ON tbl_entity_35 (is_active, category_type);
CREATE INDEX idx_entity_35_created ON tbl_entity_35 (created_at DESC);


CREATE TABLE tbl_entity_36 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_36_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_36_code ON tbl_entity_36 (entity_code);
CREATE INDEX idx_entity_36_status ON tbl_entity_36 (is_active, category_type);
CREATE INDEX idx_entity_36_created ON tbl_entity_36 (created_at DESC);


CREATE TABLE tbl_entity_37 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_37_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_37_code ON tbl_entity_37 (entity_code);
CREATE INDEX idx_entity_37_status ON tbl_entity_37 (is_active, category_type);
CREATE INDEX idx_entity_37_created ON tbl_entity_37 (created_at DESC);


CREATE TABLE tbl_entity_38 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_38_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_38_code ON tbl_entity_38 (entity_code);
CREATE INDEX idx_entity_38_status ON tbl_entity_38 (is_active, category_type);
CREATE INDEX idx_entity_38_created ON tbl_entity_38 (created_at DESC);


CREATE TABLE tbl_entity_39 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_39_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_39_code ON tbl_entity_39 (entity_code);
CREATE INDEX idx_entity_39_status ON tbl_entity_39 (is_active, category_type);
CREATE INDEX idx_entity_39_created ON tbl_entity_39 (created_at DESC);


CREATE TABLE tbl_entity_40 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_40_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_40_code ON tbl_entity_40 (entity_code);
CREATE INDEX idx_entity_40_status ON tbl_entity_40 (is_active, category_type);
CREATE INDEX idx_entity_40_created ON tbl_entity_40 (created_at DESC);


CREATE TABLE tbl_entity_41 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_41_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_41_code ON tbl_entity_41 (entity_code);
CREATE INDEX idx_entity_41_status ON tbl_entity_41 (is_active, category_type);
CREATE INDEX idx_entity_41_created ON tbl_entity_41 (created_at DESC);


CREATE TABLE tbl_entity_42 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_42_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_42_code ON tbl_entity_42 (entity_code);
CREATE INDEX idx_entity_42_status ON tbl_entity_42 (is_active, category_type);
CREATE INDEX idx_entity_42_created ON tbl_entity_42 (created_at DESC);


CREATE TABLE tbl_entity_43 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_43_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_43_code ON tbl_entity_43 (entity_code);
CREATE INDEX idx_entity_43_status ON tbl_entity_43 (is_active, category_type);
CREATE INDEX idx_entity_43_created ON tbl_entity_43 (created_at DESC);


CREATE TABLE tbl_entity_44 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_44_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_44_code ON tbl_entity_44 (entity_code);
CREATE INDEX idx_entity_44_status ON tbl_entity_44 (is_active, category_type);
CREATE INDEX idx_entity_44_created ON tbl_entity_44 (created_at DESC);


CREATE TABLE tbl_entity_45 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_45_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_45_code ON tbl_entity_45 (entity_code);
CREATE INDEX idx_entity_45_status ON tbl_entity_45 (is_active, category_type);
CREATE INDEX idx_entity_45_created ON tbl_entity_45 (created_at DESC);


CREATE TABLE tbl_entity_46 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_46_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_46_code ON tbl_entity_46 (entity_code);
CREATE INDEX idx_entity_46_status ON tbl_entity_46 (is_active, category_type);
CREATE INDEX idx_entity_46_created ON tbl_entity_46 (created_at DESC);


CREATE TABLE tbl_entity_47 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_47_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_47_code ON tbl_entity_47 (entity_code);
CREATE INDEX idx_entity_47_status ON tbl_entity_47 (is_active, category_type);
CREATE INDEX idx_entity_47_created ON tbl_entity_47 (created_at DESC);


CREATE TABLE tbl_entity_48 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_48_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_48_code ON tbl_entity_48 (entity_code);
CREATE INDEX idx_entity_48_status ON tbl_entity_48 (is_active, category_type);
CREATE INDEX idx_entity_48_created ON tbl_entity_48 (created_at DESC);


CREATE TABLE tbl_entity_49 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_49_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_49_code ON tbl_entity_49 (entity_code);
CREATE INDEX idx_entity_49_status ON tbl_entity_49 (is_active, category_type);
CREATE INDEX idx_entity_49_created ON tbl_entity_49 (created_at DESC);


CREATE TABLE tbl_entity_50 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_50_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_50_code ON tbl_entity_50 (entity_code);
CREATE INDEX idx_entity_50_status ON tbl_entity_50 (is_active, category_type);
CREATE INDEX idx_entity_50_created ON tbl_entity_50 (created_at DESC);


CREATE TABLE tbl_entity_51 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_51_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_51_code ON tbl_entity_51 (entity_code);
CREATE INDEX idx_entity_51_status ON tbl_entity_51 (is_active, category_type);
CREATE INDEX idx_entity_51_created ON tbl_entity_51 (created_at DESC);


CREATE TABLE tbl_entity_52 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_52_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_52_code ON tbl_entity_52 (entity_code);
CREATE INDEX idx_entity_52_status ON tbl_entity_52 (is_active, category_type);
CREATE INDEX idx_entity_52_created ON tbl_entity_52 (created_at DESC);


CREATE TABLE tbl_entity_53 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_53_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_53_code ON tbl_entity_53 (entity_code);
CREATE INDEX idx_entity_53_status ON tbl_entity_53 (is_active, category_type);
CREATE INDEX idx_entity_53_created ON tbl_entity_53 (created_at DESC);


CREATE TABLE tbl_entity_54 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_54_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_54_code ON tbl_entity_54 (entity_code);
CREATE INDEX idx_entity_54_status ON tbl_entity_54 (is_active, category_type);
CREATE INDEX idx_entity_54_created ON tbl_entity_54 (created_at DESC);


CREATE TABLE tbl_entity_55 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_55_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_55_code ON tbl_entity_55 (entity_code);
CREATE INDEX idx_entity_55_status ON tbl_entity_55 (is_active, category_type);
CREATE INDEX idx_entity_55_created ON tbl_entity_55 (created_at DESC);


CREATE TABLE tbl_entity_56 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_56_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_56_code ON tbl_entity_56 (entity_code);
CREATE INDEX idx_entity_56_status ON tbl_entity_56 (is_active, category_type);
CREATE INDEX idx_entity_56_created ON tbl_entity_56 (created_at DESC);


CREATE TABLE tbl_entity_57 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_57_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_57_code ON tbl_entity_57 (entity_code);
CREATE INDEX idx_entity_57_status ON tbl_entity_57 (is_active, category_type);
CREATE INDEX idx_entity_57_created ON tbl_entity_57 (created_at DESC);


CREATE TABLE tbl_entity_58 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_58_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_58_code ON tbl_entity_58 (entity_code);
CREATE INDEX idx_entity_58_status ON tbl_entity_58 (is_active, category_type);
CREATE INDEX idx_entity_58_created ON tbl_entity_58 (created_at DESC);


CREATE TABLE tbl_entity_59 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_59_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_59_code ON tbl_entity_59 (entity_code);
CREATE INDEX idx_entity_59_status ON tbl_entity_59 (is_active, category_type);
CREATE INDEX idx_entity_59_created ON tbl_entity_59 (created_at DESC);


CREATE TABLE tbl_entity_60 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_60_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_60_code ON tbl_entity_60 (entity_code);
CREATE INDEX idx_entity_60_status ON tbl_entity_60 (is_active, category_type);
CREATE INDEX idx_entity_60_created ON tbl_entity_60 (created_at DESC);


CREATE TABLE tbl_entity_61 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_61_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_61_code ON tbl_entity_61 (entity_code);
CREATE INDEX idx_entity_61_status ON tbl_entity_61 (is_active, category_type);
CREATE INDEX idx_entity_61_created ON tbl_entity_61 (created_at DESC);


CREATE TABLE tbl_entity_62 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_62_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_62_code ON tbl_entity_62 (entity_code);
CREATE INDEX idx_entity_62_status ON tbl_entity_62 (is_active, category_type);
CREATE INDEX idx_entity_62_created ON tbl_entity_62 (created_at DESC);


CREATE TABLE tbl_entity_63 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_63_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_63_code ON tbl_entity_63 (entity_code);
CREATE INDEX idx_entity_63_status ON tbl_entity_63 (is_active, category_type);
CREATE INDEX idx_entity_63_created ON tbl_entity_63 (created_at DESC);


CREATE TABLE tbl_entity_64 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_64_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_64_code ON tbl_entity_64 (entity_code);
CREATE INDEX idx_entity_64_status ON tbl_entity_64 (is_active, category_type);
CREATE INDEX idx_entity_64_created ON tbl_entity_64 (created_at DESC);


CREATE TABLE tbl_entity_65 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_65_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_65_code ON tbl_entity_65 (entity_code);
CREATE INDEX idx_entity_65_status ON tbl_entity_65 (is_active, category_type);
CREATE INDEX idx_entity_65_created ON tbl_entity_65 (created_at DESC);


CREATE TABLE tbl_entity_66 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_66_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_66_code ON tbl_entity_66 (entity_code);
CREATE INDEX idx_entity_66_status ON tbl_entity_66 (is_active, category_type);
CREATE INDEX idx_entity_66_created ON tbl_entity_66 (created_at DESC);


CREATE TABLE tbl_entity_67 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_67_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_67_code ON tbl_entity_67 (entity_code);
CREATE INDEX idx_entity_67_status ON tbl_entity_67 (is_active, category_type);
CREATE INDEX idx_entity_67_created ON tbl_entity_67 (created_at DESC);


CREATE TABLE tbl_entity_68 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_68_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_68_code ON tbl_entity_68 (entity_code);
CREATE INDEX idx_entity_68_status ON tbl_entity_68 (is_active, category_type);
CREATE INDEX idx_entity_68_created ON tbl_entity_68 (created_at DESC);


CREATE TABLE tbl_entity_69 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_69_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_69_code ON tbl_entity_69 (entity_code);
CREATE INDEX idx_entity_69_status ON tbl_entity_69 (is_active, category_type);
CREATE INDEX idx_entity_69_created ON tbl_entity_69 (created_at DESC);


CREATE TABLE tbl_entity_70 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_70_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_70_code ON tbl_entity_70 (entity_code);
CREATE INDEX idx_entity_70_status ON tbl_entity_70 (is_active, category_type);
CREATE INDEX idx_entity_70_created ON tbl_entity_70 (created_at DESC);


CREATE TABLE tbl_entity_71 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_71_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_71_code ON tbl_entity_71 (entity_code);
CREATE INDEX idx_entity_71_status ON tbl_entity_71 (is_active, category_type);
CREATE INDEX idx_entity_71_created ON tbl_entity_71 (created_at DESC);


CREATE TABLE tbl_entity_72 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_72_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_72_code ON tbl_entity_72 (entity_code);
CREATE INDEX idx_entity_72_status ON tbl_entity_72 (is_active, category_type);
CREATE INDEX idx_entity_72_created ON tbl_entity_72 (created_at DESC);


CREATE TABLE tbl_entity_73 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_73_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_73_code ON tbl_entity_73 (entity_code);
CREATE INDEX idx_entity_73_status ON tbl_entity_73 (is_active, category_type);
CREATE INDEX idx_entity_73_created ON tbl_entity_73 (created_at DESC);


CREATE TABLE tbl_entity_74 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_74_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_74_code ON tbl_entity_74 (entity_code);
CREATE INDEX idx_entity_74_status ON tbl_entity_74 (is_active, category_type);
CREATE INDEX idx_entity_74_created ON tbl_entity_74 (created_at DESC);


CREATE TABLE tbl_entity_75 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_75_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_75_code ON tbl_entity_75 (entity_code);
CREATE INDEX idx_entity_75_status ON tbl_entity_75 (is_active, category_type);
CREATE INDEX idx_entity_75_created ON tbl_entity_75 (created_at DESC);


CREATE TABLE tbl_entity_76 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_76_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_76_code ON tbl_entity_76 (entity_code);
CREATE INDEX idx_entity_76_status ON tbl_entity_76 (is_active, category_type);
CREATE INDEX idx_entity_76_created ON tbl_entity_76 (created_at DESC);


CREATE TABLE tbl_entity_77 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_77_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_77_code ON tbl_entity_77 (entity_code);
CREATE INDEX idx_entity_77_status ON tbl_entity_77 (is_active, category_type);
CREATE INDEX idx_entity_77_created ON tbl_entity_77 (created_at DESC);


CREATE TABLE tbl_entity_78 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_78_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_78_code ON tbl_entity_78 (entity_code);
CREATE INDEX idx_entity_78_status ON tbl_entity_78 (is_active, category_type);
CREATE INDEX idx_entity_78_created ON tbl_entity_78 (created_at DESC);


CREATE TABLE tbl_entity_79 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_79_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_79_code ON tbl_entity_79 (entity_code);
CREATE INDEX idx_entity_79_status ON tbl_entity_79 (is_active, category_type);
CREATE INDEX idx_entity_79_created ON tbl_entity_79 (created_at DESC);


CREATE TABLE tbl_entity_80 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_80_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_80_code ON tbl_entity_80 (entity_code);
CREATE INDEX idx_entity_80_status ON tbl_entity_80 (is_active, category_type);
CREATE INDEX idx_entity_80_created ON tbl_entity_80 (created_at DESC);


CREATE TABLE tbl_entity_81 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_81_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_81_code ON tbl_entity_81 (entity_code);
CREATE INDEX idx_entity_81_status ON tbl_entity_81 (is_active, category_type);
CREATE INDEX idx_entity_81_created ON tbl_entity_81 (created_at DESC);


CREATE TABLE tbl_entity_82 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_82_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_82_code ON tbl_entity_82 (entity_code);
CREATE INDEX idx_entity_82_status ON tbl_entity_82 (is_active, category_type);
CREATE INDEX idx_entity_82_created ON tbl_entity_82 (created_at DESC);


CREATE TABLE tbl_entity_83 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_83_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_83_code ON tbl_entity_83 (entity_code);
CREATE INDEX idx_entity_83_status ON tbl_entity_83 (is_active, category_type);
CREATE INDEX idx_entity_83_created ON tbl_entity_83 (created_at DESC);


CREATE TABLE tbl_entity_84 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_84_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_84_code ON tbl_entity_84 (entity_code);
CREATE INDEX idx_entity_84_status ON tbl_entity_84 (is_active, category_type);
CREATE INDEX idx_entity_84_created ON tbl_entity_84 (created_at DESC);


CREATE TABLE tbl_entity_85 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_85_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_85_code ON tbl_entity_85 (entity_code);
CREATE INDEX idx_entity_85_status ON tbl_entity_85 (is_active, category_type);
CREATE INDEX idx_entity_85_created ON tbl_entity_85 (created_at DESC);


CREATE TABLE tbl_entity_86 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_86_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_86_code ON tbl_entity_86 (entity_code);
CREATE INDEX idx_entity_86_status ON tbl_entity_86 (is_active, category_type);
CREATE INDEX idx_entity_86_created ON tbl_entity_86 (created_at DESC);


CREATE TABLE tbl_entity_87 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_87_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_87_code ON tbl_entity_87 (entity_code);
CREATE INDEX idx_entity_87_status ON tbl_entity_87 (is_active, category_type);
CREATE INDEX idx_entity_87_created ON tbl_entity_87 (created_at DESC);


CREATE TABLE tbl_entity_88 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_88_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_88_code ON tbl_entity_88 (entity_code);
CREATE INDEX idx_entity_88_status ON tbl_entity_88 (is_active, category_type);
CREATE INDEX idx_entity_88_created ON tbl_entity_88 (created_at DESC);


CREATE TABLE tbl_entity_89 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_89_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_89_code ON tbl_entity_89 (entity_code);
CREATE INDEX idx_entity_89_status ON tbl_entity_89 (is_active, category_type);
CREATE INDEX idx_entity_89_created ON tbl_entity_89 (created_at DESC);


CREATE TABLE tbl_entity_90 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_90_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_90_code ON tbl_entity_90 (entity_code);
CREATE INDEX idx_entity_90_status ON tbl_entity_90 (is_active, category_type);
CREATE INDEX idx_entity_90_created ON tbl_entity_90 (created_at DESC);


CREATE TABLE tbl_entity_91 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_91_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_91_code ON tbl_entity_91 (entity_code);
CREATE INDEX idx_entity_91_status ON tbl_entity_91 (is_active, category_type);
CREATE INDEX idx_entity_91_created ON tbl_entity_91 (created_at DESC);


CREATE TABLE tbl_entity_92 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_92_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_92_code ON tbl_entity_92 (entity_code);
CREATE INDEX idx_entity_92_status ON tbl_entity_92 (is_active, category_type);
CREATE INDEX idx_entity_92_created ON tbl_entity_92 (created_at DESC);


CREATE TABLE tbl_entity_93 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_93_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_93_code ON tbl_entity_93 (entity_code);
CREATE INDEX idx_entity_93_status ON tbl_entity_93 (is_active, category_type);
CREATE INDEX idx_entity_93_created ON tbl_entity_93 (created_at DESC);


CREATE TABLE tbl_entity_94 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_94_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_94_code ON tbl_entity_94 (entity_code);
CREATE INDEX idx_entity_94_status ON tbl_entity_94 (is_active, category_type);
CREATE INDEX idx_entity_94_created ON tbl_entity_94 (created_at DESC);


CREATE TABLE tbl_entity_95 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_95_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_95_code ON tbl_entity_95 (entity_code);
CREATE INDEX idx_entity_95_status ON tbl_entity_95 (is_active, category_type);
CREATE INDEX idx_entity_95_created ON tbl_entity_95 (created_at DESC);


CREATE TABLE tbl_entity_96 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_96_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_96_code ON tbl_entity_96 (entity_code);
CREATE INDEX idx_entity_96_status ON tbl_entity_96 (is_active, category_type);
CREATE INDEX idx_entity_96_created ON tbl_entity_96 (created_at DESC);


CREATE TABLE tbl_entity_97 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_97_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_97_code ON tbl_entity_97 (entity_code);
CREATE INDEX idx_entity_97_status ON tbl_entity_97 (is_active, category_type);
CREATE INDEX idx_entity_97_created ON tbl_entity_97 (created_at DESC);


CREATE TABLE tbl_entity_98 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_98_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_98_code ON tbl_entity_98 (entity_code);
CREATE INDEX idx_entity_98_status ON tbl_entity_98 (is_active, category_type);
CREATE INDEX idx_entity_98_created ON tbl_entity_98 (created_at DESC);


CREATE TABLE tbl_entity_99 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_99_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_99_code ON tbl_entity_99 (entity_code);
CREATE INDEX idx_entity_99_status ON tbl_entity_99 (is_active, category_type);
CREATE INDEX idx_entity_99_created ON tbl_entity_99 (created_at DESC);


CREATE TABLE tbl_entity_100 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_100_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_100_code ON tbl_entity_100 (entity_code);
CREATE INDEX idx_entity_100_status ON tbl_entity_100 (is_active, category_type);
CREATE INDEX idx_entity_100_created ON tbl_entity_100 (created_at DESC);


CREATE TABLE tbl_entity_101 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_101_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_101_code ON tbl_entity_101 (entity_code);
CREATE INDEX idx_entity_101_status ON tbl_entity_101 (is_active, category_type);
CREATE INDEX idx_entity_101_created ON tbl_entity_101 (created_at DESC);


CREATE TABLE tbl_entity_102 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_102_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_102_code ON tbl_entity_102 (entity_code);
CREATE INDEX idx_entity_102_status ON tbl_entity_102 (is_active, category_type);
CREATE INDEX idx_entity_102_created ON tbl_entity_102 (created_at DESC);


CREATE TABLE tbl_entity_103 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_103_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_103_code ON tbl_entity_103 (entity_code);
CREATE INDEX idx_entity_103_status ON tbl_entity_103 (is_active, category_type);
CREATE INDEX idx_entity_103_created ON tbl_entity_103 (created_at DESC);


CREATE TABLE tbl_entity_104 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_104_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_104_code ON tbl_entity_104 (entity_code);
CREATE INDEX idx_entity_104_status ON tbl_entity_104 (is_active, category_type);
CREATE INDEX idx_entity_104_created ON tbl_entity_104 (created_at DESC);


CREATE TABLE tbl_entity_105 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_105_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_105_code ON tbl_entity_105 (entity_code);
CREATE INDEX idx_entity_105_status ON tbl_entity_105 (is_active, category_type);
CREATE INDEX idx_entity_105_created ON tbl_entity_105 (created_at DESC);


CREATE TABLE tbl_entity_106 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_106_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_106_code ON tbl_entity_106 (entity_code);
CREATE INDEX idx_entity_106_status ON tbl_entity_106 (is_active, category_type);
CREATE INDEX idx_entity_106_created ON tbl_entity_106 (created_at DESC);


CREATE TABLE tbl_entity_107 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_107_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_107_code ON tbl_entity_107 (entity_code);
CREATE INDEX idx_entity_107_status ON tbl_entity_107 (is_active, category_type);
CREATE INDEX idx_entity_107_created ON tbl_entity_107 (created_at DESC);


CREATE TABLE tbl_entity_108 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_108_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_108_code ON tbl_entity_108 (entity_code);
CREATE INDEX idx_entity_108_status ON tbl_entity_108 (is_active, category_type);
CREATE INDEX idx_entity_108_created ON tbl_entity_108 (created_at DESC);


CREATE TABLE tbl_entity_109 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_109_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_109_code ON tbl_entity_109 (entity_code);
CREATE INDEX idx_entity_109_status ON tbl_entity_109 (is_active, category_type);
CREATE INDEX idx_entity_109_created ON tbl_entity_109 (created_at DESC);


CREATE TABLE tbl_entity_110 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_110_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_110_code ON tbl_entity_110 (entity_code);
CREATE INDEX idx_entity_110_status ON tbl_entity_110 (is_active, category_type);
CREATE INDEX idx_entity_110_created ON tbl_entity_110 (created_at DESC);


CREATE TABLE tbl_entity_111 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_111_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_111_code ON tbl_entity_111 (entity_code);
CREATE INDEX idx_entity_111_status ON tbl_entity_111 (is_active, category_type);
CREATE INDEX idx_entity_111_created ON tbl_entity_111 (created_at DESC);


CREATE TABLE tbl_entity_112 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_112_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_112_code ON tbl_entity_112 (entity_code);
CREATE INDEX idx_entity_112_status ON tbl_entity_112 (is_active, category_type);
CREATE INDEX idx_entity_112_created ON tbl_entity_112 (created_at DESC);


CREATE TABLE tbl_entity_113 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_113_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_113_code ON tbl_entity_113 (entity_code);
CREATE INDEX idx_entity_113_status ON tbl_entity_113 (is_active, category_type);
CREATE INDEX idx_entity_113_created ON tbl_entity_113 (created_at DESC);


CREATE TABLE tbl_entity_114 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_114_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_114_code ON tbl_entity_114 (entity_code);
CREATE INDEX idx_entity_114_status ON tbl_entity_114 (is_active, category_type);
CREATE INDEX idx_entity_114_created ON tbl_entity_114 (created_at DESC);


CREATE TABLE tbl_entity_115 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_115_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_115_code ON tbl_entity_115 (entity_code);
CREATE INDEX idx_entity_115_status ON tbl_entity_115 (is_active, category_type);
CREATE INDEX idx_entity_115_created ON tbl_entity_115 (created_at DESC);


CREATE TABLE tbl_entity_116 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_116_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_116_code ON tbl_entity_116 (entity_code);
CREATE INDEX idx_entity_116_status ON tbl_entity_116 (is_active, category_type);
CREATE INDEX idx_entity_116_created ON tbl_entity_116 (created_at DESC);


CREATE TABLE tbl_entity_117 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_117_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_117_code ON tbl_entity_117 (entity_code);
CREATE INDEX idx_entity_117_status ON tbl_entity_117 (is_active, category_type);
CREATE INDEX idx_entity_117_created ON tbl_entity_117 (created_at DESC);


CREATE TABLE tbl_entity_118 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_118_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_118_code ON tbl_entity_118 (entity_code);
CREATE INDEX idx_entity_118_status ON tbl_entity_118 (is_active, category_type);
CREATE INDEX idx_entity_118_created ON tbl_entity_118 (created_at DESC);


CREATE TABLE tbl_entity_119 (
    id VARCHAR(36) PRIMARY KEY,
    entity_code VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_type VARCHAR(50) DEFAULT 'GENERAL',
    is_active BOOLEAN DEFAULT TRUE,
    priority_level INT DEFAULT 0,
    metadata_json JSONB DEFAULT '{}'::jsonb,
    created_by VARCHAR(36),
    updated_by VARCHAR(36),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_entity_119_priority CHECK (priority_level >= 0)
);

CREATE INDEX idx_entity_119_code ON tbl_entity_119 (entity_code);
CREATE INDEX idx_entity_119_status ON tbl_entity_119 (is_active, category_type);
CREATE INDEX idx_entity_119_created ON tbl_entity_119 (created_at DESC);
