import type { Locale } from '@/lib/settings';

export type Dictionary = {
  nav: {
    dashboard: string;
    orders: string;
    products: string;
    advertising: string;
    expenses: string;
  };
  sidebar: {
    nextStepsTitle: string;
    nextStepsDescription: string;
    language: string;
    theme: string;
    localeUk: string;
    localeEn: string;
    themeLight: string;
    themeDark: string;
  };
  common: {
    overview: string;
    downloadReport: string;
    viewAll: string;
    last7Days: string;
    last30Days: string;
    valueWord: string;
    responsible: string;
  };
  pages: {
    dashboard: {
      title: string;
      subtitle: string;
      revenueTitle: string;
      revenueSubtitle: string;
      profitTitle: string;
      profitSubtitle: string;
      adSpendTitle: string;
      adSpendSubtitle: string;
      latestOrdersTitle: string;
    };
    orders: {
      title: string;
      subtitle: string;
    };
    products: {
      title: string;
      subtitle: string;
    };
    advertising: {
      title: string;
      subtitle: string;
      channelSpendTitle: string;
      formTitle: string;
      formDescription: string;
      facebookLabel: string;
      googleLabel: string;
      saveButton: string;
    };
    expenses: {
      title: string;
      subtitle: string;
      fixedTitle: string;
      fixedCadence: string;
      variableTitle: string;
      variableCadence: string;
    };
    login: {
      signupTitle: string;
      loginTitle: string;
      signupSubtitle: string;
      loginSubtitle: string;
      fullName: string;
      email: string;
      password: string;
      fullNamePlaceholder: string;
      emailPlaceholder: string;
      passwordPlaceholder: string;
      submitWaiting: string;
      submitSignup: string;
      submitLogin: string;
      switchToLoginPrompt: string;
      switchToSignupPrompt: string;
      switchToLogin: string;
      switchToSignup: string;
      demoTitle: string;
      demoDescription: string;
      authFailed: string;
      tryAgain: string;
    };
  };
  tables: {
    generic: {
      id: string;
      details: string;
      status: string;
      amount: string;
    };
    orders: {
      title: string;
      orderId: string;
      date: string;
      product: string;
      revenue: string;
      costPrice: string;
      delivery: string;
      ads: string;
      profit: string;
    };
    products: {
      title: string;
      product: string;
      costPrice: string;
      salePrice: string;
      margin: string;
    };
  };
};

const uk: Dictionary = {
  nav: {
    dashboard: 'Дашборд',
    orders: 'Замовлення',
    products: 'Товари',
    advertising: 'Реклама',
    expenses: 'Витрати'
  },
  sidebar: {
    nextStepsTitle: 'Наступні кроки',
    nextStepsDescription: 'Підключіть джерела даних, щоб замінити тестові модулі.',
    language: 'Мова',
    theme: 'Тема',
    localeUk: 'UA',
    localeEn: 'EN',
    themeLight: 'Світла',
    themeDark: 'Темна'
  },
  common: {
    overview: 'Огляд',
    downloadReport: 'Завантажити звіт',
    viewAll: 'Переглянути все',
    last7Days: 'Останні 7 днів',
    last30Days: 'Останні 30 днів',
    valueWord: 'значення',
    responsible: 'Відповідальний'
  },
  pages: {
    dashboard: {
      title: 'Дашборд',
      subtitle: 'Відстежуйте ефективність у всьому e-commerce стеку.',
      revenueTitle: 'Дохід у динаміці',
      revenueSubtitle: '$128,430 загалом',
      profitTitle: 'Прибуток у динаміці',
      profitSubtitle: '$46,280 загалом',
      adSpendTitle: 'Витрати на рекламу у динаміці',
      adSpendSubtitle: '$24,980 загалом',
      latestOrdersTitle: 'Останні замовлення'
    },
    orders: {
      title: 'Замовлення',
      subtitle: 'Контролюйте обробку, доставку та повернення.'
    },
    products: {
      title: 'Товари',
      subtitle: 'Тримайте залишки та ціни під контролем.'
    },
    advertising: {
      title: 'Реклама',
      subtitle: 'Оцінюйте ефективність каналів і рентабельність.',
      channelSpendTitle: 'Витрати за каналами',
      formTitle: 'Внесення рекламних витрат',
      formDescription: 'Додавайте щоденні витрати, щоб ROAS і ціна покупки були актуальними.',
      facebookLabel: 'Реклама Facebook',
      googleLabel: 'Реклама Google',
      saveButton: 'Зберегти витрати'
    },
    expenses: {
      title: 'Витрати',
      subtitle: 'Аналізуйте операційні витрати та бюджети.',
      fixedTitle: 'Постійні витрати',
      fixedCadence: 'Щомісяця',
      variableTitle: 'Змінні витрати',
      variableCadence: 'Поточний період'
    },
    login: {
      signupTitle: 'Створіть акаунт',
      loginTitle: 'З поверненням',
      signupSubtitle: 'Почніть відстежувати дохід за кілька хвилин.',
      loginSubtitle: 'Увійдіть, щоб переглянути фінансові показники.',
      fullName: "Повне ім'я",
      email: 'Електронна пошта',
      password: 'Пароль',
      fullNamePlaceholder: 'Іван Петренко',
      emailPlaceholder: 'you@example.com',
      passwordPlaceholder: '••••••••',
      submitWaiting: 'Зачекайте…',
      submitSignup: 'Створити акаунт',
      submitLogin: 'Увійти',
      switchToLoginPrompt: 'Вже маєте акаунт?',
      switchToSignupPrompt: 'Вперше в Commerce Hub?',
      switchToLogin: 'Увійти',
      switchToSignup: 'Створити',
      demoTitle: 'Демо-доступ',
      demoDescription: 'Використайте акаунт avery@example.com з паролем password123.',
      authFailed: 'Не вдалося виконати автентифікацію.',
      tryAgain: 'Сталася помилка. Спробуйте ще раз.'
    }
  },
  tables: {
    generic: {
      id: 'ID',
      details: 'Деталі',
      status: 'Статус',
      amount: 'Сума'
    },
    orders: {
      title: 'Замовлення',
      orderId: 'ID замовлення',
      date: 'Дата',
      product: 'Товар',
      revenue: 'Дохід',
      costPrice: 'Собівартість',
      delivery: 'Доставка',
      ads: 'Реклама',
      profit: 'Прибуток'
    },
    products: {
      title: 'Товари',
      product: 'Товар',
      costPrice: 'Ціна закупівлі',
      salePrice: 'Ціна продажу',
      margin: 'Маржа %'
    }
  }
};

const en: Dictionary = {
  nav: {
    dashboard: 'Dashboard',
    orders: 'Orders',
    products: 'Products',
    advertising: 'Advertising',
    expenses: 'Expenses'
  },
  sidebar: {
    nextStepsTitle: 'Next Steps',
    nextStepsDescription: 'Connect your data sources to replace demo modules.',
    language: 'Language',
    theme: 'Theme',
    localeUk: 'UA',
    localeEn: 'EN',
    themeLight: 'Light',
    themeDark: 'Dark'
  },
  common: {
    overview: 'Overview',
    downloadReport: 'Download report',
    viewAll: 'View all',
    last7Days: 'Last 7 days',
    last30Days: 'Last 30 days',
    valueWord: 'value',
    responsible: 'Owner'
  },
  pages: {
    dashboard: {
      title: 'Dashboard',
      subtitle: 'Track performance across your entire e-commerce stack.',
      revenueTitle: 'Revenue trend',
      revenueSubtitle: '$128,430 total',
      profitTitle: 'Profit trend',
      profitSubtitle: '$46,280 total',
      adSpendTitle: 'Ad spend trend',
      adSpendSubtitle: '$24,980 total',
      latestOrdersTitle: 'Recent orders'
    },
    orders: {
      title: 'Orders',
      subtitle: 'Monitor processing, delivery, and returns.'
    },
    products: {
      title: 'Products',
      subtitle: 'Keep stock and pricing under control.'
    },
    advertising: {
      title: 'Advertising',
      subtitle: 'Evaluate channel performance and profitability.',
      channelSpendTitle: 'Spend by channel',
      formTitle: 'Ad spend input',
      formDescription: 'Add daily costs to keep ROAS and CPA up to date.',
      facebookLabel: 'Facebook ads',
      googleLabel: 'Google ads',
      saveButton: 'Save spend'
    },
    expenses: {
      title: 'Expenses',
      subtitle: 'Analyze operational costs and budgets.',
      fixedTitle: 'Fixed expenses',
      fixedCadence: 'Monthly',
      variableTitle: 'Variable expenses',
      variableCadence: 'Current period'
    },
    login: {
      signupTitle: 'Create an account',
      loginTitle: 'Welcome back',
      signupSubtitle: 'Start tracking revenue in minutes.',
      loginSubtitle: 'Sign in to review your financial performance.',
      fullName: 'Full name',
      email: 'Email',
      password: 'Password',
      fullNamePlaceholder: 'John Doe',
      emailPlaceholder: 'you@example.com',
      passwordPlaceholder: '••••••••',
      submitWaiting: 'Please wait…',
      submitSignup: 'Create account',
      submitLogin: 'Sign in',
      switchToLoginPrompt: 'Already have an account?',
      switchToSignupPrompt: 'New to Commerce Hub?',
      switchToLogin: 'Sign in',
      switchToSignup: 'Create one',
      demoTitle: 'Demo access',
      demoDescription: 'Use avery@example.com with password123.',
      authFailed: 'Authentication failed.',
      tryAgain: 'Something went wrong. Please try again.'
    }
  },
  tables: {
    generic: {
      id: 'ID',
      details: 'Details',
      status: 'Status',
      amount: 'Amount'
    },
    orders: {
      title: 'Orders',
      orderId: 'Order ID',
      date: 'Date',
      product: 'Product',
      revenue: 'Revenue',
      costPrice: 'Cost',
      delivery: 'Delivery',
      ads: 'Ads',
      profit: 'Profit'
    },
    products: {
      title: 'Products',
      product: 'Product',
      costPrice: 'Cost price',
      salePrice: 'Sale price',
      margin: 'Margin %'
    }
  }
};

const dictionaries: Record<Locale, Dictionary> = {
  uk,
  en
};

export const getDictionary = (locale: Locale) => dictionaries[locale];
