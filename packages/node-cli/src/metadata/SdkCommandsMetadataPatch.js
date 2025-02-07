module.exports = {
	"account:manageauth": {
		"options": {
			"info": {
				"description": "Prints the following information for the specified authentication ID (authID): account ID, role ID, and url. Usage: account:manageauth --info {authID}."
			},
			"list": {
				"description": "Prints a list of all the configured authentication IDs (authID). Usage: account:manageauth --list."
			},
			"remove": {
				"description": "Remove an authentication ID (authID). Usage: account:manageauth --remove {authID}."
			},
			"rename": {
				"description": "Rename an authentication ID (authID). You must specify it together with the renameto option. Usage: account:manageauth --rename {authID} --renameto {newauthID}."
			},
			"renameto": {
				"description": "Enter the new ID for an authentication ID (authID). You must specify it together with the rename option. Usage: account:manageauth --rename {authID} --renameto {newauthID}."
			},
			"revoke": {
				"description": "Revokes the TBA token that was issued to your account and is linked to the specified authentication ID (authID). Usage: account:manageauth --revoke {authID}."
			}
		}
	},
	"project:create": {
		"options": {
			"includeunittesting": {
				"name": "includeunittesting",
				"type": "FLAG",
				"disableInIntegrationMode": true
			}
		}
	},
	"project:deploy": {
		"options": {
			"dryrun": {
				"name": "dryrun",
				"option": "dryrun",
				"description": "Run a preview of your deploy process. Your project is not deployed.",
				"mandatory": false,
				"type": "FLAG",
				"usage": "",
				"defaultOption": false,
				"disableInIntegrationMode": false
			},
			"applyinstallprefs": {
				"alias": "a"
			}
		}
	},
	"project:validate": {
		"options": {
			"applyinstallprefs": {
				"alias": "a"
			}
		}
	}
};
