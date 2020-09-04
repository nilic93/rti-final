export namespace SlidesMocks {
    export const MockDynamoDBResponse = {
      Item: {
        content_key: 'slides',
        data: {
          en: [
            {
              sequenceNumber: 0,
              header: 'Lorem ipsum',
              image: 'someimage.png',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit accumsan maximus. Sed vestibulum risus.',
            },
            {
              sequenceNumber: 1,
              header: 'Lorem ipsum',
              image: 'someimage.png',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit accumsan maximus. Sed vestibulum risus.',
            },
          ],
          nl: [
            {
              sequenceNumber: 0,
              header: 'Lorem ipsum',
              image: 'someimage.png',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit accumsan maximus. Sed vestibulum risus.',
            },
            {
              sequenceNumber: 1,
              header: 'Lorem ipsum',
              image: 'someimage.png',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit accumsan maximus. Sed vestibulum risus.',
            },
          ],
        },
        updatedAt: 1597828353829,
      },
    };
}
