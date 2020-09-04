export namespace TranslationsMocks {
    export const MockDynamoDBResponse = {
      Item: {
        content_key: 'translations',
        data: {
          labels: {
            en: 'Lorem ipsum',
            nl: 'Lorem ipsum',
          },
          terms_and_conditions: {
            en: 'Lorem ipsum',
            nl: 'Lorem ipsum',
          },
          disclaimer: {
            en: 'Lorem ipsum',
            nl: 'Lorem ipsum',
          },
        },
        updatedAt: 1597828353829,

      },
    };
}
