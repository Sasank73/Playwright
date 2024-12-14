const apiData = {
  endPointUrl: "https://api.nodafi-staging.com/graphql",
  format: "application/json",
  apiToken:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RAbm9kYWZpLmNvbSIsInVzZXJJZCI6ImNsdHgzOHZ4dzAxdGswaW1qaGZubWh4eHYiLCJvcmdhbml6YXRpb25JZCI6ImNsdHgzOHZ4djAxdGowaW1qNTE2YmN0cXEiLCJzdWIiOiJjbHR4Mzh2eHcwMXRrMGltamhmbm1oeHh2IiwiaWF0IjoxNzE0NzQyNTYyLCJleHAiOjE3NDYzMDAxNjJ9.NSa0I9CnWIb1xPg8GrXoRJglG_nOjELaNtkl6Q4aQZc",
  locationCreationqueryData: `
    fragment LocationPageUserInfo on User {
      id
      name
      email
      isActive
      __typename
    }
    
    fragment FileInfo on File {
      id
      contentType
      name
      size
      url
      __typename
    }
    
    fragment FieldEntryInfo on FieldEntry {
      id
      note
      files {
        ...FileInfo
        __typename
      }
      field {
        id
        type
        __typename
      }
      ... on TextFieldEntry {
        text
        __typename
      }
      ... on LongTextFieldEntry {
        longText
        __typename
      }
      ... on NumericFieldEntry {
        number
        __typename
      }
      ... on BinaryFieldEntry {
        boolean
        __typename
      }
      ... on PicklistFieldEntry {
        selectedOption {
          id
          internalTitle
          iconColor
          __typename
        }
        __typename
      }
      ... on LookupFieldEntry {
        resourceRecordId
        __typename
      }
      __typename
    }
    
    fragment LocationInfo on Location {
      id
      name
      lat
      long
      staff {
        ...LocationPageUserInfo
        __typename
      }
      files {
        ...FileInfo
        __typename
      }
      fieldEntries {
        ...FieldEntryInfo
        __typename
      }
      isActive
      createdAt
      updatedAt
      __typename
    }
            mutation createLocation($name: String!, $lat: String!, $long: String!, $staff: [ID!], $isActive: Boolean, $files: [Upload!], $fieldEntries: [CreateFieldEntryInput!]) {
              createLocation(
                data: { name: $name, lat: $lat, long: $long, staffIds: $staff, isActive: $isActive, files: $files, fieldEntries: $fieldEntries }
                files: $files
              ) {
                ...LocationInfo
                __typename
              }
            }
          `,
};
export default apiData;
