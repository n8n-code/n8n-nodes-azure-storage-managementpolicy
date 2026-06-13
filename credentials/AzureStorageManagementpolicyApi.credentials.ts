import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureStorageManagementpolicyApi implements ICredentialType {
        name = 'N8nDevAzureStorageManagementpolicyApi';

        displayName = 'Azure Storage Managementpolicy API';

        icon: Icon = { light: 'file:../nodes/AzureStorageManagementpolicy/azure-storage-managementpolicy.png', dark: 'file:../nodes/AzureStorageManagementpolicy/azure-storage-managementpolicy.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Storage Managementpolicy API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
