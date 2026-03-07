export const QUERY_KEYS = {
  ACCOUNT: 'account',
  CATEGORIES: 'categories',
  SUBCATEGORIES: 'subcategories',
  SOURCES: 'sources'
} as const;

export const QUERY_ARR_KEYS = {
  ACCOUNT: [QUERY_KEYS.ACCOUNT] as const,
  CATEGORIES: [QUERY_KEYS.CATEGORIES] as const,
  SOURCES: [QUERY_KEYS.SOURCES] as const
} as const;

export const MUTATION_KEYS = {
  ACCOUNT: {
    EDIT: 'editAccount'
  },
  CATEGORY: {
    CREATE: 'createCategory',
    EDIT: 'editCategory',
    DELETE: 'deleteCategory'
  },
  SUBCATEGORY: {
    CREATE: 'createSubcategory',
    EDIT: 'editSubcategory',
    DELETE: 'deleteSubcategory'
  },
  SOURCE: {
    CREATE: 'createSource',
    EDIT: 'editSource',
    DELETE: 'deleteSource'
  }
} as const;
