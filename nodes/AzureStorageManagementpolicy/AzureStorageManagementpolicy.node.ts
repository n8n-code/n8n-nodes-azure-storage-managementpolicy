import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureStorageManagementpolicy implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Storage Managementpolicy',
		name: 'N8nDevAzureStorageManagementpolicy',
		icon: { light: 'file:./azure-storage-managementpolicy.png', dark: 'file:./azure-storage-managementpolicy.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure Storage Management API.',
		defaults: { name: 'Azure Storage Managementpolicy' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureStorageManagementpolicyApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
