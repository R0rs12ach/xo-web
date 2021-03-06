// See http://momentjs.com/docs/#/use-it/browserify/
import 'moment/locale/fr'

import reactIntlData from 'react-intl/locale-data/fr'
import { addLocaleData } from 'react-intl'
addLocaleData(reactIntlData)

// ===================================================================

export default {
  // Original text: "Connecting"
  statusConnecting: 'Connexion…',

  // Original text: "Disconnected"
  statusDisconnected: 'Déconnecté',

  // Original text: "Loading…"
  statusLoading: 'Chargement…',

  // Original text: "Page not found"
  errorPageNotFound: 'Page introuvable',

  // Original text: "no such item"
  errorNoSuchItem: 'aucune correspondance',

  // Original text: "Long click to edit"
  editableLongClickPlaceholder: 'Clic long pour éditer',

  // Original text: "Click to edit"
  editableClickPlaceholder: 'Cliquer pour éditer',

  // Original text: "OK"
  alertOk: 'OK',

  // Original text: "OK"
  confirmOk: 'OK',

  // Original text: "Cancel"
  confirmCancel: 'Annuler',

  // Original text: "On error"
  onError: 'En erreur',

  // Original text: "Successful"
  successful: 'Réussi',

  // Original text: "Copy to clipboard"
  copyToClipboard: 'Copier dans le presse-papier',

  // Original text: "Master"
  pillMaster: 'Maître',

  // Original text: "Home"
  homePage: 'Accueil',

  // Original text: "VMs"
  homeVmPage: 'VMs',

  // Original text: "Hosts"
  homeHostPage: 'Hôtes',

  // Original text: "Pools"
  homePoolPage: 'Pools',

  // Original text: "Templates"
  homeTemplatePage: 'Templates',

  // Original text: "Dashboard"
  dashboardPage: 'Tableau de bord',

  // Original text: "Overview"
  overviewDashboardPage: "Vue d'ensemble",

  // Original text: "Visualizations"
  overviewVisualizationDashboardPage: 'Visualisations',

  // Original text: "Statistics"
  overviewStatsDashboardPage: 'Statistiques',

  // Original text: "Health"
  overviewHealthDashboardPage: 'État de santé',

  // Original text: "Self service"
  selfServicePage: 'Libre service',

  // Original text: "Backup"
  backupPage: 'Sauvegardes',

  // Original text: "Jobs"
  jobsPage: 'Jobs',

  // Original text: "Updates"
  updatePage: 'Mises à jour',

  // Original text: "Settings"
  settingsPage: 'Paramètres',

  // Original text: "Servers"
  settingsServersPage: 'Serveurs',

  // Original text: "Users"
  settingsUsersPage: 'Utilisateurs',

  // Original text: "Groups"
  settingsGroupsPage: 'Groupes',

  // Original text: "ACLs"
  settingsAclsPage: 'Droits',

  // Original text: "Plugins"
  settingsPluginsPage: 'Greffons',

  // Original text: "Logs"
  settingsLogsPage: 'Journaux',

  // Original text: "IPs"
  settingsIpsPage: 'IPs',

  // Original text: "About"
  aboutPage: 'À propos',

  // Original text: "New"
  newMenu: 'Nouveau',

  // Original text: "Tasks"
  taskMenu: 'Tâches',

  // Original text: "Tasks"
  taskPage: 'Tâches',

  // Original text: "VM"
  newVmPage: 'VM',

  // Original text: "Storage"
  newSrPage: 'Stockage',

  // Original text: "Server"
  newServerPage: 'Serveur',

  // Original text: "Import"
  newImport: 'Importer',

  // Original text: "Overview"
  backupOverviewPage: "Vue d'ensemble",

  // Original text: "New"
  backupNewPage: 'Nouveau',

  // Original text: "Remotes"
  backupRemotesPage: 'Emplacement',

  // Original text: "Restore"
  backupRestorePage: 'Restaurer',

  // Original text: "Schedule"
  schedule: 'Planifier',

  // Original text: "New VM backup"
  newVmBackup: 'Nouvelle sauvegarde de VM',

  // Original text: "Edit VM backup"
  editVmBackup: 'Éditer une sauvegarde de VM',

  // Original text: "Backup"
  backup: 'Sauvegarder',

  // Original text: "Rolling Snapshot"
  rollingSnapshot: 'Rolling Snapshot',

  // Original text: "Delta Backup"
  deltaBackup: 'Delta Backup',

  // Original text: "Disaster Recovery"
  disasterRecovery: 'Disaster Recovery',

  // Original text: "Continuous Replication"
  continuousReplication: 'Réplication continue',

  // Original text: "Overview"
  jobsOverviewPage: "Vue d'ensemble",

  // Original text: "New"
  jobsNewPage: 'Nouveau',

  // Original text: "Scheduling"
  jobsSchedulingPage: 'Planifier',

  // Original text: "Custom Job"
  customJob: 'Job personnalisé',

  // Original text: "User"
  userPage: 'Utilisateur',

  // Original text: "No support"
  noSupport: 'Pas de support',

  // Original text: "Free upgrade!"
  freeUpgrade: 'Mise à jour gratuite !',

  // Original text: "Sign out"
  signOut: 'Se déconnecter',

  // Original text: "Edit my settings {username}"
  editUserProfile: 'Éditer mes options {username}',

  // Original text: "Fetching data…"
  homeFetchingData: 'Récupération des données…',

  // Original text: "Welcome on Xen Orchestra!"
  homeWelcome: 'Bienvenue sur Xen Orchestra!',

  // Original text: "Add your XenServer hosts or pools"
  homeWelcomeText: 'Ajouter vos serveurs ou pools XenServer',

  // Original text: "Want some help?"
  homeHelp: "Besoin d'aide ?",

  // Original text: "Add server"
  homeAddServer: 'Ajouter un serveur',

  // Original text: "Online Doc"
  homeOnlineDoc: 'Documentation en ligne',

  // Original text: "Pro Support"
  homeProSupport: 'Support professionel',

  // Original text: "There are no VMs!"
  homeNoVms: "Il n'y a pas de VMs !",

  // Original text: "Or…"
  homeNoVmsOr: 'Ou…',

  // Original text: "Import VM"
  homeImportVm: 'Importer une VM',

  // Original text: "Import an existing VM in xva format"
  homeImportVmMessage: 'Importer une VM existante au format xva',

  // Original text: "Restore a backup"
  homeRestoreBackup: 'Restaurer une sauvegarde',

  // Original text: "Restore a backup from a remote store"
  homeRestoreBackupMessage: 'Restaurer une sauvegarde depuis un stockage distant',

  // Original text: "This will create a new VM"
  homeNewVmMessage: 'Cela va créer une nouvelle VM',

  // Original text: "Filters"
  homeFilters: 'Filtres',

  // Original text: "No results! Click here to reset your filters"
  homeNoMatches: 'Aucun résultat! Cliquez ici pour réinitialiser vos filtres',

  // Original text: "Pool"
  homeTypePool: 'Pool',

  // Original text: "Host"
  homeTypeHost: 'Hôtes',

  // Original text: "VM"
  homeTypeVm: 'VM',

  // Original text: "SR"
  homeTypeSr: 'SR',

  // Original text: "Template"
  homeTypeVmTemplate: 'Template',

  // Original text: "Sort"
  homeSort: 'Trier',

  // Original text: "Pools"
  homeAllPools: 'Pools',

  // Original text: "Hosts"
  homeAllHosts: 'Hôtes',

  // Original text: "Tags"
  homeAllTags: 'Tags',

  // Original text: "New VM"
  homeNewVm: 'Nouvelle VM',

  // Original text: "Running hosts"
  homeFilterRunningHosts: 'Hôtes démarré',

  // Original text: "Disabled hosts"
  homeFilterDisabledHosts: 'Hôtes désactivés',

  // Original text: "Running VMs"
  homeFilterRunningVms: 'VMs démarré',

  // Original text: "Non running VMs"
  homeFilterNonRunningVms: 'VMs éteinte',

  // Original text: "Pending VMs"
  homeFilterPendingVms: 'VMs en attente',

  // Original text: "HVM guests"
  homeFilterHvmGuests: 'Invités HVM',

  // Original text: "Tags"
  homeFilterTags: 'Tags',

  // Original text: "Sort by"
  homeSortBy: 'Trier par',

  // Original text: "Name"
  homeSortByName: 'Nom',

  // Original text: "Power state"
  homeSortByPowerstate: 'Alimentation',

  // Original text: "RAM"
  homeSortByRAM: 'RAM',

  // Original text: "vCPUs"
  homeSortByvCPUs: 'vCPUs',

  // Original text: "CPUs"
  homeSortByCpus: 'CPUs',

  // Original text: "{displayed, number}x {icon} (on {total, number})"
  homeDisplayedItems: '{displayed, number}x {icon} (sur {total, number})',

  // Original text: "{selected, number}x {icon} selected (on {total, number})"
  homeSelectedItems: '{selected, number}x {icon} sélectionnés (sur {total, number})',

  // Original text: "More"
  homeMore: 'Plus',

  // Original text: "Migrate to…"
  homeMigrateTo: 'Migrer vers…',

  // Original text: "Missing patches"
  homeMissingPaths: 'Patches manquant',

  // Original text: "Master:"
  homePoolMaster: 'Maître :',

  // Original text: "High Availability"
  highAvailability: 'Haute disponibilité',

  // Original text: "Add"
  add: 'Ajouter',

  // Original text: "Remove"
  remove: 'Supprimer',

  // Original text: "Preview"
  preview: 'Aperçu',

  // Original text: "Item"
  item: 'Objet',

  // Original text: "No selected value"
  noSelectedValue: 'Pas de valeur sélectionnée',

  // Original text: "Choose user(s) and/or group(s)"
  selectSubjects: 'Sélectionner un ou des utilisateur(s) et/ou groupe(s)',

  // Original text: "Select Object(s)…"
  selectObjects: 'Sélectionner le(s) objet(s)…',

  // Original text: "Choose a role"
  selectRole: 'Choisir un rôle',

  // Original text: "Select Host(s)…"
  selectHosts: 'Choisir un/des hôte(s)…',

  // Original text: "Select object(s)…"
  selectHostsVms: 'Choisir un/des object(s)…',

  // Original text: "Select Network(s)…"
  selectNetworks: 'Choisir un/des réseau(x)…',

  // Original text: "Select PIF(s)…"
  selectPifs: 'Sélectionner la/les PIF(s)…',

  // Original text: "Select Pool(s)…"
  selectPools: 'Sélectionner le(s) Pool(s)…',

  // Original text: "Select Remote(s)…"
  selectRemotes: 'Choisir un/des emplacement(s)…',

  // Original text: "Select resource set(s)…"
  selectResourceSets: 'Choisir un jeu de ressource(s)…',

  // Original text: "Select template(s)…"
  selectResourceSetsVmTemplate: 'Sélectionner le(s) template(s)…',

  // Original text: "Select SR(s)…"
  selectResourceSetsSr: 'Sélectionner le(s) SR(s)…',

  // Original text: "Select network(s)…"
  selectResourceSetsNetwork: 'Sélectionner le(s) réseau(x)…',

  // Original text: "Select disk(s)…"
  selectResourceSetsVdi: 'Sélectionner le(s) disque(s)…',

  // Original text: "Select SSH key(s)…"
  selectSshKey: 'Sélectionner la/les clef(s) SSH…',

  // Original text: "Select SR(s)…"
  selectSrs: 'Sélectionner le(s) SR(s)…',

  // Original text: "Select VM(s)…"
  selectVms: 'Sélectionner la/les VM(s)…',

  // Original text: "Select VM template(s)…"
  selectVmTemplates: 'Sélectionner le(s) template(s) de VM…',

  // Original text: "Select tag(s)…"
  selectTags: 'Sélectionner le(s) tag(s)…',

  // Original text: "Select disk(s)…"
  selectVdis: 'Sélectionner le(s) disque(s)…',

  // Original text: "Select timezone…"
  selectTimezone: 'Sélectionner le fuseau horaire…',

  // Original text: "Select IP(s)…"
  selectIp: 'Sélectionner la/les IP(s)…',

  // Original text: "Select IP pool(s)…"
  selectIpPool: "Sélectionner le(s) plage(s) d'IP(s)…",

  // Original text: "Fill required informations."
  fillRequiredInformations: 'Saisir les informations obligatoire.',

  // Original text: "Fill informations (optional)"
  fillOptionalInformations: 'Saisir les informations (optionelle)',

  // Original text: "Reset"
  selectTableReset: 'Réinitialiser',

  // Original text: "Month"
  schedulingMonth: 'Mois',

  // Original text: "Each selected month"
  schedulingEachSelectedMonth: 'Chaque mois sélectionné',

  // Original text: "Day of the month"
  schedulingMonthDay: 'Jour du mois',

  // Original text: "Each selected day"
  schedulingEachSelectedMonthDay: 'Chaque jour sélectionné',

  // Original text: "Day of the week"
  schedulingWeekDay: 'Jour de la semaine',

  // Original text: "Each selected day"
  schedulingEachSelectedWeekDay: 'Chaque jour sélectionné',

  // Original text: "Hour"
  schedulingHour: 'Heure',

  // Original text: "Every N hour"
  schedulingEveryNHour: 'Toutes les N heures',

  // Original text: "Each selected hour"
  schedulingEachSelectedHour: 'Chaque heure sélectionnée',

  // Original text: "Minute"
  schedulingMinute: 'Minute',

  // Original text: "Every N minute"
  schedulingEveryNMinute: 'Toutes les N minutes',

  // Original text: "Each selected minute"
  schedulingEachSelectedMinute: 'Chaque minute sélectionnée',

  // Original text: "Reset"
  schedulingReset: 'Réinitialiser',

  // Original text: "Unknown"
  unknownSchedule: 'Inconnu',

  // Original text: "Xo-server timezone:"
  timezonePickerServerValue: 'Fuseau horaire du Xo-server :',

  // Original text: "Web browser timezone"
  timezonePickerUseLocalTime: 'Fuseau horaire de votre navigateur',

  // Original text: "Xo-server timezone"
  timezonePickerUseServerTime: 'Fuseau horaire du Xo-server',

  // Original text: "Server timezone ({value})"
  serverTimezoneOption: 'Fuseau horaire du serveur ({value})',

  // Original text: "Cron Pattern:"
  cronPattern: 'Motif Cron :',

  // Original text: "Cannot edit backup"
  backupEditNotFoundTitle: "Impossible d'éditer la sauvegarde",

  // Original text: "Missing required info for edition"
  backupEditNotFoundMessage: "Il manque les informations nécessaire à l'édition",

  // Original text: "Job"
  job: 'Job',

  // Original text: "Job ID"
  jobId: 'Job ID',

  // Original text: "Name"
  jobName: 'Nom',

  // Original text: "Name of your job (forbidden: \"_\")"
  jobNamePlaceholder: 'Nom de votre job (caractère interdit : "_")',

  // Original text: "Start"
  jobStart: 'Début',

  // Original text: "End"
  jobEnd: 'Fin',

  // Original text: "Duration"
  jobDuration: 'Durée',

  // Original text: "Status"
  jobStatus: 'État',

  // Original text: "Action"
  jobAction: 'Action',

  // Original text: "Tag"
  jobTag: 'Tag',

  // Original text: "Scheduling"
  jobScheduling: 'Planifié',

  // Original text: "State"
  jobState: 'État',

  // Original text: "Timezone"
  jobTimezone: 'Fuseau horaire',

  // Original text: "xo-server"
  jobServerTimezone: 'xo-server',

  // Original text: "Run job"
  runJob: 'Lancer le job',

  // Original text: "One shot running started. See overview for logs."
  runJobVerbose: "Une exécution a été lancée. Voir l'overview pour plus de détails.",

  // Original text: "Started"
  jobStarted: 'Démarré',

  // Original text: "Finished"
  jobFinished: 'Terminé',

  // Original text: "Save"
  saveBackupJob: 'Enregistrer',

  // Original text: "Remove backup job"
  deleteBackupSchedule: 'Supprimer ce job de sauvegarde',

  // Original text: "Are you sure you want to delete this backup job?"
  deleteBackupScheduleQuestion: 'Êtes-vous sûr de vouloir supprimer ce job de sauvegarde ?',

  // Original text: "Enable immediately after creation"
  scheduleEnableAfterCreation: 'Activé aussitôt après la création',

  // Original text: "You are editing Schedule {name} ({id}). Saving will override previous schedule state."
  scheduleEditMessage: "Vous êtes en train d'éditer {name} ({id}). Enregistrer écrasera l'état planifié précédent.",

  // Original text: "You are editing job {name} ({id}). Saving will override previous job state."
  jobEditMessage: "Vous êtes en train d'éditer le job {name} ({id}). Enregistrer écrasera l'état du job précédent.",

  // Original text: "No scheduled jobs."
  noScheduledJobs: 'Pas de job planifié.',

  // Original text: "No jobs found."
  noJobs: 'Pas de job trouvé.',

  // Original text: "No schedules found"
  noSchedules: 'Pas de planification trouvé',

  // Original text: "Select a xo-server API command"
  jobActionPlaceHolder: "Sélectionnez une commande de l'API xo-server",

  // Original text: "Schedules"
  jobSchedules: 'Planning',

  // Original text: "Name of your schedule"
  jobScheduleNamePlaceHolder: 'Nom de votre plannification',

  // Original text: "Select a Job"
  jobScheduleJobPlaceHolder: 'Choisir un Job',

  // Original text: "Select your backup type:"
  newBackupSelection: 'Choisissez votre type de sauvegarde :',

  // Original text: "Select backup mode:"
  smartBackupModeSelection: 'Sélectionnez votre mode de sauvegarde :',

  // Original text: "Normal backup"
  normalBackup: 'Normal backup',

  // Original text: "Smart backup"
  smartBackup: 'Smart backup',

  // Original text: "Local remote selected"
  localRemoteWarningTitle: 'Emplacement local sélectionné',

  // Original text: "Warning: local remotes will use limited XOA disk space. Only for advanced users."
  localRemoteWarningMessage: "Attention : utilisé un emplacement local limite l'espace pour XO. Restreignez ceci aux utilisateurs avancés.",

  // Original text: "VMs"
  editBackupVmsTitle: 'VMs',

  // Original text: "VMs statuses"
  editBackupSmartStatusTitle: 'État des VMs',

  // Original text: "Resident on"
  editBackupSmartResidentOn: 'Situé sur',

  // Original text: "VMs Tags"
  editBackupSmartTagsTitle: 'Tags des VMs',

  // Original text: "Tag"
  editBackupTagTitle: 'Tag',

  // Original text: "Report"
  editBackupReportTitle: 'Rapport',

  // Original text: "Enable immediately after creation"
  editBackupReportEnable: 'Activé aussitôt après la création',

  // Original text: "Depth"
  editBackupDepthTitle: 'Profondeur',

  // Original text: "Remote"
  editBackupRemoteTitle: 'Emplacement',

  // Original text: "Remote stores for backup"
  remoteList: 'Emplacement de stockage de backup',

  // Original text: "New File System Remote"
  newRemote: 'Nouvel emplacement de stockage',

  // Original text: "Local"
  remoteTypeLocal: 'Local',

  // Original text: "NFS"
  remoteTypeNfs: 'NFS',

  // Original text: "SMB"
  remoteTypeSmb: 'SMB',

  // Original text: "Type"
  remoteType: 'Type',

  // Original text: "Test your remote"
  remoteTestTip: 'Testez votre emplacement',

  // Original text: "Test Remote"
  testRemote: "Tester l'emplacement",

  // Original text: "Test failed for {name}"
  remoteTestFailure: 'Test réussi pour {name}',

  // Original text: "Test passed for {name}"
  remoteTestSuccess: 'Test échoué for {name}',

  // Original text: "Error"
  remoteTestError: 'Erreur',

  // Original text: "Test Step"
  remoteTestStep: 'Étape de test',

  // Original text: "Test file"
  remoteTestFile: 'Fichier de test',

  // Original text: "The remote appears to work correctly"
  remoteTestSuccessMessage: "L'emplacement distant semble marcher correctement",

  // Original text: "Name"
  remoteName: 'Nom',

  // Original text: "Path"
  remotePath: 'Chemin',

  // Original text: "State"
  remoteState: 'État',

  // Original text: "Device"
  remoteDevice: 'Équipement',

  // Original text: "Share"
  remoteShare: 'Partage',

  // Original text: "Auth"
  remoteAuth: 'Accès',

  // Original text: "Mounted"
  remoteMounted: 'Monté',

  // Original text: "Unmounted"
  remoteUnmounted: 'Démonté',

  // Original text: "Connect"
  remoteConnectTip: 'Connecter',

  // Original text: "Disconnect"
  remoteDisconnectTip: 'Déconnecter',

  // Original text: "Delete"
  remoteDeleteTip: 'Supprimer',

  // Original text: "remote name *"
  remoteNamePlaceHolder: 'nom distant*',

  // Original text: "Name *"
  remoteMyNamePlaceHolder: 'Nom *',

  // Original text: "/path/to/backup"
  remoteLocalPlaceHolderPath: '/chemin/de/la/sauvegarde',

  // Original text: "host *"
  remoteNfsPlaceHolderHost: 'hôte*',

  // Original text: "/path/to/backup"
  remoteNfsPlaceHolderPath: 'chemin/de/la/sauvegarde',

  // Original text: "subfolder [path\\to\\backup]"
  remoteSmbPlaceHolderRemotePath: 'sous-répertoire [chemin\\vers\\la\\sauvegarde]',

  // Original text: "Username"
  remoteSmbPlaceHolderUsername: "Nom d'utilisateur",

  // Original text: "Password"
  remoteSmbPlaceHolderPassword: 'Mot de passe',

  // Original text: "Domain"
  remoteSmbPlaceHolderDomain: 'Domaine',

  // Original text: "<address>\\<share> *"
  remoteSmbPlaceHolderAddressShare: '<adresse>\\<partage> *',

  // Original text: "password(fill to edit)"
  remotePlaceHolderPassword: 'mot de passe (saisir ici pour éditer)',

  // Original text: "Create a new SR"
  newSrTitle: 'Créer un nouvel SR',

  // Original text: "General"
  newSrGeneral: 'Général',

  // Original text: "Select Storage Type:"
  newSrTypeSelection: 'Sélectionner un type de stockage :',

  // Original text: "Settings"
  newSrSettings: 'Paramètres',

  // Original text: "Storage Usage"
  newSrUsage: 'Utilisation du stockage',

  // Original text: "Summary"
  newSrSummary: 'Récapitulatif',

  // Original text: "Host"
  newSrHost: 'Hôtes',

  // Original text: "Type"
  newSrType: 'Type',

  // Original text: "Name"
  newSrName: 'Name',

  // Original text: "Description"
  newSrDescription: 'Description',

  // Original text: "Server"
  newSrServer: 'Serveur',

  // Original text: "Path"
  newSrPath: 'Chemin',

  // Original text: "IQN"
  newSrIqn: 'IQN',

  // Original text: "LUN"
  newSrLun: 'LUN',

  // Original text: "with auth."
  newSrAuth: 'avec identification',

  // Original text: "User Name"
  newSrUsername: "Nom d'utilisateur",

  // Original text: "Password"
  newSrPassword: 'Mot de passe',

  // Original text: "Device"
  newSrDevice: 'Équipement',

  // Original text: "in use"
  newSrInUse: 'utilisé',

  // Original text: "Size"
  newSrSize: 'Taille',

  // Original text: "Create"
  newSrCreate: 'Créer',

  // Original text: "Storage name"
  newSrNamePlaceHolder: "Nom de l'emplacement",

  // Original text: "Storage description"
  newSrDescPlaceHolder: "Description de l'emplacement",

  // Original text: "Address"
  newSrAddressPlaceHolder: 'Adresse',

  // Original text: "[port]"
  newSrPortPlaceHolder: '[port]',

  // Original text: "Username"
  newSrUsernamePlaceHolder: "Nom d'utilisateur",

  // Original text: "Password"
  newSrPasswordPlaceHolder: 'Mot de passe',

  // Original text: "Device, e.g /dev/sda…"
  newSrLvmDevicePlaceHolder: 'Matériel, par exemple /dev/sda…',

  // Original text: "/path/to/directory"
  newSrLocalPathPlaceHolder: '/chemin/du/répertoire',

  // Original text: "Users/Groups"
  subjectName: 'Utilisateurs/Groupes',

  // Original text: "Object"
  objectName: 'Objet',

  // Original text: "No acls found"
  aclNoneFound: 'Aucun droits existants',

  // Original text: "Role"
  roleName: 'Rôle',

  // Original text: "Create"
  aclCreate: 'Créer',

  // Original text: "New Group Name"
  newGroupName: 'Nouveau nom de groupe',

  // Original text: "Create Group"
  createGroup: 'Créer un groupe',

  // Original text: "Create"
  createGroupButton: 'Créer',

  // Original text: "Delete Group"
  deleteGroup: 'Supprimer le groupe',

  // Original text: "Are you sure you want to delete this group?"
  deleteGroupConfirm: 'Êtes-vous sûr de vouloir supprimer ce groupe ?',

  // Original text: "Remove user from Group"
  removeUserFromGroup: "Supprimer l'utilisateur du groupe",

  // Original text: "Are you sure you want to delete this user?"
  deleteUserConfirm: 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?',

  // Original text: "Delete User"
  deleteUser: "Supprimer l'utilisateur",

  // Original text: "no user"
  noUser: "pas d'utilisateur",

  // Original text: "unknown user"
  unknownUser: 'utilisateur incoonu',

  // Original text: "No group found"
  noGroupFound: 'Pas de groupes trouvé',

  // Original text: "Name"
  groupNameColumn: 'Nom',

  // Original text: "Users"
  groupUsersColumn: 'Utilisateur',

  // Original text: "Add User"
  addUserToGroupColumn: 'Ajouter un utilisateur',

  // Original text: "Email"
  userNameColumn: 'Email',

  // Original text: "Permissions"
  userPermissionColumn: 'Droits',

  // Original text: "Password"
  userPasswordColumn: 'Mot de passe',

  // Original text: "Email"
  userName: 'Email',

  // Original text: "Password"
  userPassword: 'Mot de passe',

  // Original text: "Create"
  createUserButton: 'Créer',

  // Original text: "No user found"
  noUserFound: "Pas d'utilisateur trouvé",

  // Original text: "User"
  userLabel: 'Utilisateur',

  // Original text: "Admin"
  adminLabel: 'Administrateur',

  // Original text: "No user in group"
  noUserInGroup: "Pas d'utilisateur dans ce groupe",

  // Original text: "{users} user{users, plural, one {} other {s}}"
  countUsers: '{users} utilisateur{users, plural, one {} other {s}}',

  // Original text: "Select Permission"
  selectPermission: 'Choisir les droits',

  // Original text: "Auto-load at server start"
  autoloadPlugin: 'Charger automatiquement au démarrage du serveur',

  // Original text: "Save configuration"
  savePluginConfiguration: 'Sauvegarder la configuration',

  // Original text: "Delete configuration"
  deletePluginConfiguration: 'Supprimer la configuration',

  // Original text: "Plugin error"
  pluginError: 'Erreur du greffon',

  // Original text: "Unknown error"
  unknownPluginError: 'Erreur inconnue',

  // Original text: "Purge plugin configuration"
  purgePluginConfiguration: 'Purger la configuration du greffon',

  // Original text: "Are you sure you want to purge this configuration ?"
  purgePluginConfigurationQuestion: 'Êtes-vous sûr de vouloir purger la configuration de ce greffon ?',

  // Original text: "Edit"
  editPluginConfiguration: 'Éditer',

  // Original text: "Cancel"
  cancelPluginEdition: 'Annuler',

  // Original text: "Plugin configuration"
  pluginConfigurationSuccess: 'Configuration du greffon',

  // Original text: "Plugin configuration successfully saved!"
  pluginConfigurationChanges: 'La configuration du greffon a été sauvegardé avec succés !',

  // Original text: "Predefined configuration"
  pluginConfigurationPresetTitle: 'Configurations pré-définies',

  // Original text: "Choose a predefined configuration."
  pluginConfigurationChoosePreset: 'Choisir une configuration pré-définie.',

  // Original text: "Apply"
  applyPluginPreset: 'Appliquer',

  // Original text: "Save filter error"
  saveNewUserFilterErrorTitle: "Erreur lors de l'enregistrement du filtre",

  // Original text: "Bad parameter: name must be given."
  saveNewUserFilterErrorBody: 'Erreur: un nom doit être spécifié.',

  // Original text: "Name:"
  filterName: 'Nom :',

  // Original text: "Value:"
  filterValue: 'Valeur :',

  // Original text: "Save new filter"
  saveNewFilterTitle: 'Enregistrer un nouveau filtre',

  // Original text: "Set custom filters"
  setUserFiltersTitle: 'Personnaliser un filtre',

  // Original text: "Are you sure you want to set custom filters?"
  setUserFiltersBody: 'Êtes-vous sûr de vouloir personnaliser un filtre ?',

  // Original text: "Remove custom filter"
  removeUserFilterTitle: 'Supprimer un filtre personnalisé',

  // Original text: "Are you sure you want to remove custom filter?"
  removeUserFilterBody: 'Êtes-vous sûr de vouloir supprimer ce filtre personnalisé ?',

  // Original text: "Default filter"
  defaultFilter: 'Filtre par défaut',

  // Original text: "Default filters"
  defaultFilters: 'Filtres par défaut',

  // Original text: "Custom filters"
  customFilters: 'Filtre personnalisé',

  // Original text: "Customize filters"
  customizeFilters: 'Personnaliser les filtres',

  // Original text: "Save custom filters"
  saveCustomFilters: 'Sauvegarder les filtres personnalisé',

  // Original text: "Start"
  startVmLabel: 'Créer',

  // Original text: "Recovery start"
  recoveryModeLabel: 'Démarrage de dépannage',

  // Original text: "Suspend"
  suspendVmLabel: 'Suspendre',

  // Original text: "Stop"
  stopVmLabel: 'Arrêter',

  // Original text: "Force shutdown"
  forceShutdownVmLabel: "Forver l'arrêt",

  // Original text: "Reboot"
  rebootVmLabel: 'Redémarrer',

  // Original text: "Force reboot"
  forceRebootVmLabel: 'Forcer le redémarrage',

  // Original text: "Delete"
  deleteVmLabel: 'Supprimer',

  // Original text: "Migrate"
  migrateVmLabel: 'Migrer',

  // Original text: "Snapshot"
  snapshotVmLabel: 'Instantané',

  // Original text: "Export"
  exportVmLabel: 'Exporter',

  // Original text: "Resume"
  resumeVmLabel: 'Reprendre',

  // Original text: "Copy"
  copyVmLabel: 'Copier',

  // Original text: "Clone"
  cloneVmLabel: 'Cloner',

  // Original text: "Fast clone"
  fastCloneVmLabel: 'Clonage rapide',

  // Original text: "Convert to template"
  convertVmToTemplateLabel: 'Convertir en template',

  // Original text: "Console"
  vmConsoleLabel: 'Console',

  // Original text: "Rescan all disks"
  srRescan: 'Rescanner tous les disques',

  // Original text: "Connect to all hosts"
  srReconnectAll: 'Connecter sur tous les hôtes',

  // Original text: "Disconnect to all hosts"
  srDisconnectAll: 'Déconnecter de tous les hôtes',

  // Original text: "Forget this SR"
  srForget: 'Oublier ce SR',

  // Original text: "Remove this SR"
  srRemoveButton: 'Supprimer ce SR',

  // Original text: "No VDIs in this storage"
  srNoVdis: 'Pas de VDIs sur ce stockage',

  // Original text: "Pool RAM usage:"
  poolTitleRamUsage: 'Utilisation RAM du pool :',

  // Original text: "{used} used on {total}"
  poolRamUsage: '{used} utilisé sur {total}',

  // Original text: "Master:"
  poolMaster: 'Maître:',

  // Original text: "Hosts"
  hostsTabName: 'Hôtes',

  // Original text: "High Availability"
  poolHaStatus: 'Haute Disponibilité',

  // Original text: "Enabled"
  poolHaEnabled: 'Activé',

  // Original text: "Disabled"
  poolHaDisabled: 'Désactivé',

  // Original text: "Name"
  hostNameLabel: 'Nom',

  // Original text: "Description"
  hostDescription: 'Description',

  // Original text: "Memory"
  hostMemory: 'Mémoire',

  // Original text: "No hosts"
  noHost: "Pas d'hôtes",

  // Original text: "{used}% used ({free} free)"
  memoryLeftTooltip: '{used}% utilisé ({free} libre)',

  // Original text: "Name"
  poolNetworkNameLabel: 'Nom',

  // Original text: "Description"
  poolNetworkDescription: 'Description',

  // Original text: "PIFs"
  poolNetworkPif: 'PIFs',

  // Original text: "No networks"
  poolNoNetwork: 'Pas de réseaux',

  // Original text: "MTU"
  poolNetworkMTU: 'MTU',

  // Original text: "Connected"
  poolNetworkPifAttached: 'Connecté',

  // Original text: "Disconnected"
  poolNetworkPifDetached: 'Déconnecté',

  // Original text: "Show PIFs"
  showPifs: 'Afficher les PIFs',

  // Original text: "Hide PIFs"
  hidePifs: 'Cacher les PIFs',

  // Original text: "Add SR"
  addSrLabel: 'Ajouter un SR',

  // Original text: "Add VM"
  addVmLabel: 'Ajouter une VM',

  // Original text: "Add Host"
  addHostLabel: 'Ajouter un Hôte',

  // Original text: "Disconnect"
  disconnectServer: 'Déconnecter',

  // Original text: "Start"
  startHostLabel: 'Démarrer',

  // Original text: "Stop"
  stopHostLabel: 'Arrêter',

  // Original text: "Enable"
  enableHostLabel: 'Activer',

  // Original text: "Disable"
  disableHostLabel: 'Désactiver',

  // Original text: "Restart toolstack"
  restartHostAgent: 'Redémarrer la toolstack',

  // Original text: "Force reboot"
  forceRebootHostLabel: 'Forcer un redémarrage',

  // Original text: "Reboot"
  rebootHostLabel: 'Redémarrer',

  // Original text: "Reboot for applying updates"
  rebootUpdateHostLabel: 'Redémarrer pour appliquer les mises à jour',

  // Original text: "Emergency mode"
  emergencyModeLabel: 'Emergency mode',

  // Original text: "Storage"
  storageTabName: 'Stockage',

  // Original text: "Patches"
  patchesTabName: 'Patches',

  // Original text: "Load average"
  statLoad: 'Charge (load) moyenne :',

  // Original text: "Hardware"
  hardwareHostSettingsLabel: 'Matériel',

  // Original text: "Address"
  hostAddress: 'Addresse',

  // Original text: "Status"
  hostStatus: 'État',

  // Original text: "Build number"
  hostBuildNumber: 'Numéro de build',

  // Original text: "iSCSI name"
  hostIscsiName: 'Nom iSCSI',

  // Original text: "Version"
  hostXenServerVersion: 'Version',

  // Original text: "Enabled"
  hostStatusEnabled: 'Activé',

  // Original text: "Disabled"
  hostStatusDisabled: 'Désactivé',

  // Original text: "Power on mode"
  hostPowerOnMode: "Mode d'allumage",

  // Original text: "Host uptime"
  hostStartedSince: "Temps d'activité",

  // Original text: "Toolstack uptime"
  hostStackStartedSince: 'Toolstack uptime',

  // Original text: "CPU model"
  hostCpusModel: 'Modèle de CPU',

  // Original text: "Core (socket)"
  hostCpusNumber: 'Cœur (socket)',

  // Original text: "Manufacturer info"
  hostManufacturerinfo: 'Informations constructeur',

  // Original text: "BIOS info"
  hostBiosinfo: 'Informations BIOS',

  // Original text: "Licence"
  licenseHostSettingsLabel: 'License',

  // Original text: "Type"
  hostLicenseType: 'Type',

  // Original text: "Socket"
  hostLicenseSocket: 'Socket',

  // Original text: "Expiry"
  hostLicenseExpiry: 'Expiry',

  // Original text: "Add a network"
  networkCreateButton: 'Ajouter un réseau',

  // Original text: "Add a bonded network"
  networkCreateBondedButton: 'Ajouter un réseau agrégé',

  // Original text: "Device"
  pifDeviceLabel: 'Device',

  // Original text: "Network"
  pifNetworkLabel: 'Réseau',

  // Original text: "VLAN"
  pifVlanLabel: 'VLAN',

  // Original text: "Address"
  pifAddressLabel: 'Addresse',

  // Original text: 'Mode'
  pifModeLabel: undefined,

  // Original text: "MAC"
  pifMacLabel: 'MAC',

  // Original text: "MTU"
  pifMtuLabel: 'MTU',

  // Original text: "Status"
  pifStatusLabel: 'État',

  // Original text: "Connected"
  pifStatusConnected: 'Connecté',

  // Original text: "Disconnected"
  pifStatusDisconnected: 'Déconnecté',

  // Original text: "No physical interface detected"
  pifNoInterface: "Pas d'interface physique détecté",

  // Original text: "This interface is currently in use"
  pifInUse: "Cette interface est en cours d'utilisation",

  // Original text: "Default locking mode"
  defaultLockingMode: 'Vérouillage par défaut',

  // Original text: 'Configure IP address'
  pifConfigureIp: undefined,

  // Original text: 'Invalid parameters'
  configIpErrorTitle: undefined,

  // Original text: 'IP address and netmask required'
  configIpErrorMessage: undefined,

  // Original text: 'Static IP address'
  staticIp: undefined,

  // Original text: 'Netmask'
  netmask: undefined,

  // Original text: 'DNS'
  dns: undefined,

  // Original text: 'Gateway'
  gateway: undefined,

  // Original text: "Add a storage"
  addSrDeviceButton: 'Ajouter un stockage',

  // Original text: "Name"
  srNameLabel: 'Nom',

  // Original text: "Type"
  srType: 'Type',

  // Original text: "Status"
  pbdStatus: 'État',

  // Original text: "Connected"
  pbdStatusConnected: 'Connecté',

  // Original text: "Disconnected"
  pbdStatusDisconnected: 'Déconnecté',

  // Original text: "Connect"
  pbdConnect: 'Connecter',

  // Original text: "Disconnect"
  pbdDisconnect: 'Déconnecter',

  // Original text: "Forget"
  pbdForget: 'Oublier',

  // Original text: "Shared"
  srShared: 'Partager',

  // Original text: "Not shared"
  srNotShared: 'Non partagé',

  // Original text: "No storage detected"
  pbdNoSr: 'Pas de stockage détecté',

  // Original text: "Name"
  patchNameLabel: 'Nom',

  // Original text: "Install all patches"
  patchUpdateButton: 'installer tout les patchs',

  // Original text: "Description"
  patchDescription: 'Description',

  // Original text: "Applied date"
  patchApplied: "Date d'installation",

  // Original text: "Size"
  patchSize: 'Taille',

  // Original text: "Status"
  patchStatus: 'État',

  // Original text: "Applied"
  patchStatusApplied: 'Appliqué',

  // Original text: "Missing patches"
  patchStatusNotApplied: 'Patches manquant',

  // Original text: "No patch detected"
  patchNothing: 'Pas de patchs détectés',

  // Original text: "Release date"
  patchReleaseDate: 'Date de diffusion',

  // Original text: "Guidance"
  patchGuidance: 'Guidance',

  // Original text: "Action"
  patchAction: 'Action',

  // Original text: "Applied patches"
  hostAppliedPatches: 'Patches appliqués',

  // Original text: "Missing patches"
  hostMissingPatches: 'Patches manquant',

  // Original text: "Host up-to-date!"
  hostUpToDate: 'Hôte à jour !',

  // Original text: "Refresh patches"
  refreshPatches: 'Rafraichir patchs',

  // Original text: "Install pool patches"
  installPoolPatches: 'Installer les patchs sur le pool',

  // Original text: "Default SR"
  defaultSr: 'SR par défaut',

  // Original text: "Set as default SR"
  setAsDefaultSr: 'Définir comme SR par défaut',

  // Original text: "General"
  generalTabName: 'Général',

  // Original text: "Stats"
  statsTabName: 'Stats',

  // Original text: "Console"
  consoleTabName: 'Console',

  // Original text: "Container"
  containersTabName: 'Conteneur',

  // Original text: "Snapshots"
  snapshotsTabName: 'Instantanés',

  // Original text: "Logs"
  logsTabName: 'Journaux',

  // Original text: "Advanced"
  advancedTabName: 'Avancés',

  // Original text: "Network"
  networkTabName: 'Réseaux',

  // Original text: "Disk{disks, plural, one {} other {s}}"
  disksTabName: 'Disque{disks, plural, one {} other {s}}',

  // Original text: "halted"
  powerStateHalted: 'stoppé',

  // Original text: "running"
  powerStateRunning: 'en cours',

  // Original text: "suspended"
  powerStateSuspended: 'suspendu',

  // Original text: "No Xen tools detected"
  vmStatus: 'Pas de Xen tools détectés',

  // Original text: "No IPv4 record"
  vmName: "Pas d'enregistrement IPv4",

  // Original text: "No IP record"
  vmDescription: "Pas d'enregistrement IP",

  // Original text: "Started {ago}"
  vmSettings: 'Démarré il y a {ago}',

  // Original text: "Current status:"
  vmCurrentStatus: 'État actuel:',

  // Original text: "Not running"
  vmNotRunning: 'Éteinte',

  // Original text: "No Xen tools detected"
  noToolsDetected: 'Pas de Xen tools détectés',

  // Original text: "No IPv4 record"
  noIpv4Record: "Pas d'enregistrement IPv4",

  // Original text: "No IP record"
  noIpRecord: "Pas d'enregistrement IP",

  // Original text: "Started {ago}"
  started: 'Démarré {ago}',

  // Original text: "Paravirtualization (PV)"
  paraVirtualizedMode: 'Paravirtualisation (PV)',

  // Original text: "Hardware virtualization (HVM)"
  hardwareVirtualizedMode: 'Virtualisation matérielle (HVM)',

  // Original text: "CPU usage"
  statsCpu: 'Utilisation CPU',

  // Original text: "Memory usage"
  statsMemory: 'Utilisation mémoire',

  // Original text: "Network throughput"
  statsNetwork: 'Échanges réseaux',

  // Original text: "Stacked values"
  useStackedValuesOnStats: 'Valeurs cumulées',

  // Original text: "Disk throughput"
  statDisk: 'Échanges disques',

  // Original text: "Last 10 minutes"
  statLastTenMinutes: 'Les 10 dernières minutes',

  // Original text: "Last 2 hours"
  statLastTwoHours: 'Les 2 dernières heures',

  // Original text: "Last week"
  statLastWeek: 'La dernière semaine',

  // Original text: "Last year"
  statLastYear: 'La dernière année',

  // Original text: "Copy"
  copyToClipboardLabel: 'Copier',

  // Original text: "Ctrl+Alt+Del"
  ctrlAltDelButtonLabel: 'Ctrl+Alt+Supp',

  // Original text: "Tip:"
  tipLabel: 'Astuces :',

  // Original text: "non-US keyboard could have issues with console: switch your own layout to US."
  tipConsoleLabel: 'les clavier autre que US risquent de rencontrer des soucis avec la console. Le cas échéant, changez votre configuration clavier pour US.',

  // Original text: "Hide infos"
  hideHeaderTooltip: 'Cacher les infos',

  // Original text: "Show infos"
  showHeaderTooltip: 'Afficher les infos',

  // Original text: "Name"
  containerName: 'Nom',

  // Original text: "Command"
  containerCommand: 'Command',

  // Original text: "Creation date"
  containerCreated: 'Date de création',

  // Original text: "Status"
  containerStatus: 'État',

  // Original text: "Action"
  containerAction: 'Action',

  // Original text: "No existing containers"
  noContainers: 'Aucun conteneurs',

  // Original text: "Stop this container"
  containerStop: 'Arrêter ce conteneur',

  // Original text: "Start this container"
  containerStart: 'Démarrer ce conteneur',

  // Original text: "Pause this container"
  containerPause: 'Mettre en pause ce conteneur',

  // Original text: "Resume this container"
  containerResume: 'Relancer ce conteneur',

  // Original text: "Restart this container"
  containerRestart: 'Redémarrer ce conteneur',

  // Original text: "Action"
  vdiAction: 'Action',

  // Original text: "Attach disk"
  vdiAttachDeviceButton: 'Attacher un disque',

  // Original text: "New disk"
  vbdCreateDeviceButton: 'Nouveau disque',

  // Original text: "Boot order"
  vdiBootOrder: 'Séquence de démarrage',

  // Original text: "Name"
  vdiNameLabel: 'Nom',

  // Original text: "Description"
  vdiNameDescription: 'Description',

  // Original text: "Tags"
  vdiTags: 'Tags',

  // Original text: "Size"
  vdiSize: 'Taille',

  // Original text: "SR"
  vdiSr: 'SR',

  // Original text: "VM"
  vdiVm: 'VM',

  // Original text: "Migrate VDI"
  vdiMigrate: 'Migrer le VDI',

  // Original text: "Destination SR:"
  vdiMigrateSelectSr: 'SR de destination :',

  // Original text: "Migrate all VDIs"
  vdiMigrateAll: 'Migrer tout les VDIs',

  // Original text: "No SR"
  vdiMigrateNoSr: 'Pas de SR',

  // Original text: "A target SR is required to migrate a VDI"
  vdiMigrateNoSrMessage: 'Un SR cible est nécessaire pour migrer un VDI',

  // Original text: "Forget"
  vdiForget: 'Oublier',

  // Original text: "Remove VDI"
  vdiRemove: 'Supprimer le VDI',

  // Original text: "Boot flag"
  vdbBootableStatus: 'Boot flag',

  // Original text: "Status"
  vdbStatus: 'État',

  // Original text: "Connected"
  vbdStatusConnected: 'Connecté',

  // Original text: "Disconnected"
  vbdStatusDisconnected: 'Déconnecté',

  // Original text: "No disks"
  vbdNoVbd: 'Pas de disques',

  // Original text: "Connect VBD"
  vbdConnect: 'Connecter un VBD',

  // Original text: "Disconnect VBD"
  vbdDisconnect: 'Déconnecter un VBD',

  // Original text: "Bootable"
  vdbBootable: 'Bootable',

  // Original text: "Readonly"
  vdbReadonly: 'Lecture seule',

  // Original text: "Create"
  vdbCreate: 'Créer',

  // Original text: "Disk name"
  vdbNamePlaceHolder: 'Nom du disque',

  // Original text: "Size"
  vdbSizePlaceHolder: 'Taille',

  // Original text: "Save"
  saveBootOption: 'Enregistrer',

  // Original text: "Reset"
  resetBootOption: 'Réinitialiser',

  // Original text: "New device"
  vifCreateDeviceButton: 'Nouvelle interface',

  // Original text: "No interface"
  vifNoInterface: "Pas d'interface",

  // Original text: "Device"
  vifDeviceLabel: 'Device',

  // Original text: "MAC address"
  vifMacLabel: 'Adresse MAC',

  // Original text: "MTU"
  vifMtuLabel: 'MTU',

  // Original text: "Network"
  vifNetworkLabel: 'Réseaux',

  // Original text: "Status"
  vifStatusLabel: 'État',

  // Original text: "Connected"
  vifStatusConnected: 'Connecté',

  // Original text: "Disconnected"
  vifStatusDisconnected: 'Déconnecté',

  // Original text: "Connect"
  vifConnect: 'Connecter',

  // Original text: "Disconnect"
  vifDisconnect: 'Déconnecter',

  // Original text: "Remove"
  vifRemove: 'Supprimer',

  // Original text: "IP addresses"
  vifIpAddresses: 'Addresses IP',

  // Original text: "Auto-generated if empty"
  vifMacAutoGenerate: 'Si vide, généré automatiquement',

  // Original text: "Allowed IPs"
  vifAllowedIps: 'IPs autorisé',

  // Original text: "No IPs"
  vifNoIps: "Pas d'IPs",

  // Original text: "Network locked"
  vifLockedNetwork: 'Réseau verrouillé',

  // Original text: "Network locked and no IPs are allowed for this interface"
  vifLockedNetworkNoIps: "Le réseau est verrouillé et aucune IP n'est autorisé sur cette interface",

  // Original text: "Network not locked"
  vifUnLockedNetwork: 'Réseau non verrouillé',

  // Original text: "Unknown network"
  vifUnknownNetwork: 'Réseau inconnu',

  // Original text: "Create"
  vifCreate: 'Créer',

  // Original text: "No snapshots"
  noSnapshots: "Pas d'instantané",

  // Original text: "New snapshot"
  snapshotCreateButton: 'Nouvel instantané',

  // Original text: "Just click on the snapshot button to create one!"
  tipCreateSnapshotLabel: "Cliquer simplement sur le bouton d'instantané pour en créer un !",

  // Original text: "Revert VM to this snapshot"
  revertSnapshot: 'Restaurer la MV à cet instantané',

  // Original text: "Remove this snapshot"
  deleteSnapshot: 'Supprimer cet instantané',

  // Original text: "Create a VM from this snapshot"
  copySnapshot: 'Créer une VM depuis cet instantané',

  // Original text: "Export this snapshot"
  exportSnapshot: 'Exporter cet instantané',

  // Original text: "Creation date"
  snapshotDate: 'Date de création',

  // Original text: "Name"
  snapshotName: 'Nom',

  // Original text: "Action"
  snapshotAction: 'Action',

  // Original text: "Remove all logs"
  logRemoveAll: 'Supprimer tout les journaux',

  // Original text: "No logs so far"
  noLogs: 'Pas de journaux jusque là',

  // Original text: "Creation date"
  logDate: 'Date de création',

  // Original text: "Name"
  logName: 'Nom',

  // Original text: "Content"
  logContent: 'Contenu',

  // Original text: "Action"
  logAction: 'Action',

  // Original text: "Remove"
  vmRemoveButton: 'Supprimer',

  // Original text: "Convert"
  vmConvertButton: 'Convertir',

  // Original text: "Xen settings"
  xenSettingsLabel: 'Configuration Xen',

  // Original text: "Guest OS"
  guestOsLabel: 'OS invité',

  // Original text: "Misc"
  miscLabel: 'Divers',

  // Original text: "UUID"
  uuid: 'UUID',

  // Original text: "Virtualization mode"
  virtualizationMode: 'Mode de virtualisation',

  // Original text: "CPU weight"
  cpuWeightLabel: 'Pondération CPU',

  // Original text: "Default ({value, number})"
  defaultCpuWeight: 'Défaut ({value, number})',

  // Original text: "CPU cap"
  cpuCapLabel: 'Fonctionnalitées CPU',

  // Original text: "Default ({value, number})"
  defaultCpuCap: 'Défaut ({value, number})',

  // Original text: "PV args"
  pvArgsLabel: 'PV params',

  // Original text: "Xen tools status"
  xenToolsStatus: 'État du Xen tools',

  // Original text: '{status}'
  xenToolsStatusValue: undefined,

  // Original text: "OS name"
  osName: "Nom de l'OS",

  // Original text: "OS kernel"
  osKernel: "Kernel de l'OS",

  // Original text: "Auto power on"
  autoPowerOn: 'Allumage automatique',

  // Original text: "HA"
  ha: 'Haute Dispo',

  // Original text: "Original template"
  originalTemplate: "Template d'origine",

  // Original text: "Unknown"
  unknownOsName: 'Inconnu',

  // Original text: "Unknown"
  unknownOsKernel: 'Inconnu',

  // Original text: "Unknown"
  unknownOriginalTemplate: 'Inconnu',

  // Original text: "VM limits"
  vmLimitsLabel: 'Limites de VM',

  // Original text: "CPU limits"
  vmCpuLimitsLabel: 'Limites de CPU',

  // Original text: "Memory limits (min/max)"
  vmMemoryLimitsLabel: 'Limites de mémoire (min/max)',

  // Original text: "vCPUs max:"
  vmMaxVcpus: 'vCPUs max :',

  // Original text: "Memory max:"
  vmMaxRam: 'Mémoire max :',

  // Original text: "Long click to add a name"
  vmHomeNamePlaceholder: 'Clic long pour définir un nom',

  // Original text: "Long click to add a description"
  vmHomeDescriptionPlaceholder: 'Clic long pour définir une description',

  // Original text: "Click to add a name"
  vmViewNamePlaceholder: 'Clic pour définir un nom',

  // Original text: "Click to add a description"
  vmViewDescriptionPlaceholder: 'Clic pour définir une description',

  // Original text: "Click to add a name"
  templateHomeNamePlaceholder: 'Clic pour ajouter un nom',

  // Original text: "Click to add a description"
  templateHomeDescriptionPlaceholder: 'Clic pour ajouter une description',

  // Original text: "Delete template"
  templateDelete: 'Supprimer le template',

  // Original text: "Delete VM template{templates, plural, one {} other {s}}"
  templateDeleteModalTitle: 'Supprimer le(s) template{templates, plural, one {} other {s}} de VMs',

  // Original text: "Are you sure you want to delete {templates, plural, one {this} other {these}} template{templates, plural, one {} other {s}}?"
  templateDeleteModalBody: 'Êtes-vous sûr de vouloir supprimer ce(s) template(s) ?',

  // Original text: "Pool{pools, plural, one {} other {s}}"
  poolPanel: 'Pool{pools, plural, one {} other {s}}',

  // Original text: "Host{hosts, plural, one {} other {s}}"
  hostPanel: 'Hôte{hosts, plural, one {} other {s}}',

  // Original text: "VM{vms, plural, one {} other {s}}"
  vmPanel: 'VM{vms, plural, one {} other {s}}',

  // Original text: "RAM Usage"
  memoryStatePanel: 'Utilisation RAM',

  // Original text: "CPUs Usage"
  cpuStatePanel: 'Utilisation CPUs',

  // Original text: "VMs Power state"
  vmStatePanel: 'VMs démarrés ?',

  // Original text: "Pending tasks"
  taskStatePanel: 'Tâches en attente',

  // Original text: "Users"
  usersStatePanel: 'Utilisateurs',

  // Original text: "Storage state"
  srStatePanel: 'État du stockage',

  // Original text: "{usage} (of {total})"
  ofUsage: '{usage} (sur {total})',

  // Original text: "No storage"
  noSrs: 'Pas de stockage',

  // Original text: "Name"
  srName: 'Nom',

  // Original text: "Pool"
  srPool: 'Pool',

  // Original text: "Host"
  srHost: 'Hôte',

  // Original text: "Type"
  srFormat: 'Type',

  // Original text: "Size"
  srSize: 'Taille',

  // Original text: "Usage"
  srUsage: 'Usage',

  // Original text: "used"
  srUsed: 'utilisé',

  // Original text: "free"
  srFree: 'libre',

  // Original text: "Storage Usage"
  srUsageStatePanel: 'Utilisation du stockage',

  // Original text: "Top 5 SR Usage (in %)"
  srTopUsageStatePanel: "Top 5 d'utilisation des SR (en %)",

  // Original text: "{running} running ({halted} halted)"
  vmsStates: '{running} en cours ({halted} stoppés)',

  // Original text: "Clear selection"
  dashboardStatsButtonRemoveAll: 'Vider la sélection',

  // Original text: "Add all hosts"
  dashboardStatsButtonAddAllHost: 'Ajouter tout les hôtes',

  // Original text: "Add all VMs"
  dashboardStatsButtonAddAllVM: 'Ajouter toutes les VMs',

  // Original text: "{value} {date, date, medium}"
  weekHeatmapData: '{value} {date, date, medium}',

  // Original text: "No data."
  weekHeatmapNoData: 'Pas de données.',

  // Original text: "Weekly Heatmap"
  weeklyHeatmap: 'Heatmap hebdomadaire',

  // Original text: "Weekly Charts"
  weeklyCharts: 'Graphes hebdomadaire',

  // Original text: "Synchronize scale:"
  weeklyChartsScaleInfo: 'Synchroniser les échelles :',

  // Original text: "Stats error"
  statsDashboardGenericErrorTitle: 'Erreurs de stats',

  // Original text: "There is no stats available for:"
  statsDashboardGenericErrorMessage: 'Pas de statistiques disponible pour :',

  // Original text: "No selected metric"
  noSelectedMetric: 'Pas de métriques sélectionnés.',

  // Original text: "Select"
  statsDashboardSelectObjects: 'Sélectionner',

  // Original text: "Loading…"
  metricsLoading: 'Chargement en cours…',

  // Original text: "Coming soon!"
  comingSoon: "C'est pour bientôt !",

  // Original text: "Orphaned snapshot VDIs"
  orphanedVdis: 'Instantanés de VDIs orphelins',

  // Original text: "Orphaned VMs snapshot"
  orphanedVms: 'Instantanés VMs orphelins',

  // Original text: "No orphans"
  noOrphanedObject: "Pas d'orphelin",

  // Original text: "Remove all orphaned snapshot VDIs"
  removeAllOrphanedObject: 'Supprimer tout les snapshot de VDIs orphelin',

  // Original text: "Name"
  vmNameLabel: 'Nom',

  // Original text: "Description"
  vmNameDescription: 'Description',

  // Original text: "Resident on"
  vmContainer: 'Situé sur',

  // Original text: "Alarms"
  alarmMessage: 'Alarmes',

  // Original text: "No alarms"
  noAlarms: "Pas d'alarmes",

  // Original text: "Date"
  alarmDate: 'Date',

  // Original text: "Content"
  alarmContent: 'Contenu',

  // Original text: "Issue on"
  alarmObject: 'Concerne',

  // Original text: "Pool"
  alarmPool: 'Pool',

  // Original text: "Remove all alarms"
  alarmRemoveAll: 'Supprimer toute les alarmes',

  // Original text: "{used}% used ({free} left)"
  spaceLeftTooltip: '{used}% utilisé ({free} restant)',

  // Original text: "Create a new VM on {select}"
  newVmCreateNewVmOn: 'Créer une nouvelle VM sur {select}',

  // Original text: "Create a new VM on {select1} or {select2}"
  newVmCreateNewVmOn2: 'Créer une nouvelle VM sur  {select1} ou {select2}',

  // Original text: "You have no permission to create a VM"
  newVmCreateNewVmNoPermission: "Vous n'avez pas les droits pour créer une VM",

  // Original text: "Infos"
  newVmInfoPanel: 'Infos',

  // Original text: "Name"
  newVmNameLabel: 'Nom',

  // Original text: "Template"
  newVmTemplateLabel: 'Template',

  // Original text: "Description"
  newVmDescriptionLabel: 'Description',

  // Original text: "Performances"
  newVmPerfPanel: 'Performances',

  // Original text: "vCPUs"
  newVmVcpusLabel: 'vCPUs',

  // Original text: "RAM"
  newVmRamLabel: 'RAM',

  // Original text: "Static memory max"
  newVmStaticMaxLabel: 'Mémoire fixe max',

  // Original text: "Dynamic memory min"
  newVmDynamicMinLabel: 'Mémoire dynamique min',

  // Original text: "Dynamic memory max"
  newVmDynamicMaxLabel: 'Mémoire dynamique max',

  // Original text: "Install settings"
  newVmInstallSettingsPanel: "Paramètres d'installation",

  // Original text: "ISO/DVD"
  newVmIsoDvdLabel: 'ISO/DVD',

  // Original text: "Network"
  newVmNetworkLabel: 'Réseau',

  // Original text: "e.g: http://httpredir.debian.org/debian"
  newVmInstallNetworkPlaceHolder: 'ex: http://httpredir.debian.org/debian',

  // Original text: "PV Args"
  newVmPvArgsLabel: 'PV Args',

  // Original text: "PXE"
  newVmPxeLabel: 'PXE',

  // Original text: "Interfaces"
  newVmInterfacesPanel: 'Interfaces',

  // Original text: "MAC"
  newVmMacLabel: 'MAC',

  // Original text: "Add interface"
  newVmAddInterface: 'Ajouter interface',

  // Original text: "Disks"
  newVmDisksPanel: 'Disques',

  // Original text: "SR"
  newVmSrLabel: 'SR',

  // Original text: "Bootable"
  newVmBootableLabel: 'Bootable',

  // Original text: "Size"
  newVmSizeLabel: 'Taille',

  // Original text: "Add disk"
  newVmAddDisk: 'Ajouter disque',

  // Original text: "Summary"
  newVmSummaryPanel: 'Récapitulatif',

  // Original text: "Create"
  newVmCreate: 'Créer',

  // Original text: "Reset"
  newVmReset: 'Réinitialiser',

  // Original text: "Select template"
  newVmSelectTemplate: 'Sélectionner un template',

  // Original text: "SSH key"
  newVmSshKey: 'Clef SSH',

  // Original text: "Config drive"
  newVmConfigDrive: 'Config drive',

  // Original text: "Custom config"
  newVmCustomConfig: 'Configuration personnalisé',

  // Original text: "Boot VM after creation"
  newVmBootAfterCreate: 'Démarrer la VM après sa création',

  // Original text: "Auto-generated if empty"
  newVmMacPlaceholder: 'Si vide, généré automatiquement',

  // Original text: "CPU weight"
  newVmCpuWeightLabel: 'Pondération CPU',

  // Original text: "Default: {value, number}"
  newVmDefaultCpuWeight: 'Par défaut: {value, number}',

  // Original text: "CPU cap"
  newVmCpuCapLabel: 'Fonctionnalitées CPU',

  // Original text: "Default: {value, number}"
  newVmDefaultCpuCap: 'Par défaut : {value, number}',

  // Original text: "Cloud config"
  newVmCloudConfig: 'Configuration Cloud',

  // Original text: "Create VMs"
  newVmCreateVms: 'Créer les VMs',

  // Original text: "Are you sure you want to create {nbVms} VMs?"
  newVmCreateVmsConfirm: 'Êtes-vous sûr de vouloir créer {nbVms} VMs ?',

  // Original text: "Multiple VMs:"
  newVmMultipleVms: 'Multiples VMs :',

  // Original text: "Select a resource set:"
  newVmSelectResourceSet: 'Choisir un jeu de ressources :',

  // Original text: "Name pattern:"
  newVmMultipleVmsPattern: 'Motif de nom :',

  // Original text: "e.g.: \\{name\\}_%"
  newVmMultipleVmsPatternPlaceholder: 'ex. : \\{name\\}_%',

  // Original text: "First index:"
  newVmFirstIndex: 'Première itération :',

  // Original text: "Recalculate VMs number"
  newVmNumberRecalculate: 'Recalculer les nombres des VMs',

  // Original text: "Refresh VMs name"
  newVmNameRefresh: 'Rafraîchir le nom des VMs',

  // Original text: "Advanced"
  newVmAdvancedPanel: 'Avancé',

  // Original text: "Show advanced settings"
  newVmShowAdvanced: 'Afficher les paramètres avancés',

  // Original text: "Hide advanced settings"
  newVmHideAdvanced: 'Cacher les paramètres avancés',

  // Original text: "Resource sets"
  resourceSets: 'Jeu de ressources',

  // Original text: "No resource sets."
  noResourceSets: 'Pas de jeux de ressources.',

  // Original text: "Loading resource sets"
  loadingResourceSets: 'Charge les jeux de ressources…',

  // Original text: "Resource set name"
  resourceSetName: 'Nom du jeu de ressource',

  // Original text: "Recompute all limits"
  recomputeResourceSets: 'Recalculer les limites',

  // Original text: "Save"
  saveResourceSet: 'Enregistrer',

  // Original text: "Reset"
  resetResourceSet: 'Réinitialiser',

  // Original text: "Edit"
  editResourceSet: 'Éditer',

  // Original text: "Delete"
  deleteResourceSet: 'Supprimer',

  // Original text: "Delete resource set"
  deleteResourceSetWarning: 'Supprimer le jeu de ressources',

  // Original text: "Are you sure you want to delete this resource set?"
  deleteResourceSetQuestion: 'Êtes-vous sûr de vouloir supprimer ce jeu de ressources ?',

  // Original text: "Missing objects:"
  resourceSetMissingObjects: 'Objets manquant :',

  // Original text: "vCPUs"
  resourceSetVcpus: 'vCPUs',

  // Original text: "Memory"
  resourceSetMemory: 'Mémoire',

  // Original text: "Storage"
  resourceSetStorage: 'Stockage',

  // Original text: "Unknown"
  unknownResourceSetValue: 'Inconnu',

  // Original text: "Available hosts"
  availableHosts: 'Hôtes disponible',

  // Original text: "Excluded hosts"
  excludedHosts: 'Hôtes exclus',

  // Original text: "No hosts available."
  noHostsAvailable: "Pas d'hôtes disponible.",

  // Original text: "VMs created from this resource set shall run on the following hosts."
  availableHostsDescription: 'Les VMs créé sur ce jeu de ressources doivent être lancés sur les hôtes suivants.',

  // Original text: "Maximum CPUs"
  maxCpus: 'CPUs maximum',

  // Original text: "Maximum RAM (GiB)"
  maxRam: 'RAM maximum (GiB)',

  // Original text: "Maximum disk space"
  maxDiskSpace: 'Espace disque maximum',

  // Original text: "IP pool"
  ipPool: 'Plages IP',

  // Original text: "Quantity"
  quantity: 'Quantité',

  // Original text: "No limits."
  noResourceSetLimits: 'Pas de limites.',

  // Original text: "Total:"
  totalResource: 'Total :',

  // Original text: "Remaining:"
  remainingResource: 'Restant :',

  // Original text: "Used:"
  usedResource: 'Utilisé :',

  // Original text: "New"
  resourceSetNew: 'Nouvelle',

  // Original text: "Try dropping some VMs files here, or click to select VMs to upload. Accept only .xva/.ova files."
  importVmsList: 'Essayez de déposer des fichiers de VMs ici, ou bien cliquez pour sélectionner des VMs à téléverser. Seul les fichiers .xva/.ova sont acceptés.',

  // Original text: "No selected VMs."
  noSelectedVms: 'Pas de VMs sélectionné.',

  // Original text: "To Pool:"
  vmImportToPool: 'Sur le Pool:',

  // Original text: "To SR:"
  vmImportToSr: 'Sur le SR:',

  // Original text: "VMs to import"
  vmsToImport: 'VMs à importer',

  // Original text: "Reset"
  importVmsCleanList: 'Réinitialiser',

  // Original text: "VM import success"
  vmImportSuccess: 'Import de VM réussi',

  // Original text: "VM import failed"
  vmImportFailed: 'Import de VM échoué',

  // Original text: "Import starting…"
  startVmImport: "L'import commence…",

  // Original text: "Export starting…"
  startVmExport: "L'export commence…",

  // Original text: "N CPUs"
  nCpus: 'N CPUs',

  // Original text: "Memory"
  vmMemory: 'Mémoire',

  // Original text: "Disk {position} ({capacity})"
  diskInfo: 'Disque {position} ({capacity})',

  // Original text: "Disk description"
  diskDescription: 'Description du disque',

  // Original text: "No disks."
  noDisks: 'Pas de disques.',

  // Original text: "No networks."
  noNetworks: 'Pas de réseaux.',

  // Original text: "Network {name}"
  networkInfo: 'Réseau {name}',

  // Original text: "No description available"
  noVmImportErrorDescription: 'Pas de description disponible',

  // Original text: "Error:"
  vmImportError: 'Erreur:',

  // Original text: "{type} file:"
  vmImportFileType: '{type} fichier:',

  // Original text: "Please to check and/or modify the VM configuration."
  vmImportConfigAlert: 'Merci de vérifier et/ou modifier la configuration de la VM.',

  // Original text: "No pending tasks"
  noTasks: 'Pas de tâches en attente',

  // Original text: "Currently, there are not any pending XenServer tasks"
  xsTasks: "Actuellement, il n'y a aucune tâches en attente",

  // Original text: "Schedules"
  backupSchedules: 'Planifier',

  // Original text: "Get remote"
  getRemote: 'Récupérer les emplacements',

  // Original text: "List Remote"
  listRemote: 'Lister les emplacements',

  // Original text: "simple"
  simpleBackup: 'simple',

  // Original text: "delta"
  delta: 'delta',

  // Original text: "Restore Backups"
  restoreBackups: 'Restauration de sauvegardes',

  // Original text: 'Click on a VM to display restore options'
  restoreBackupsInfo: undefined,

  // Original text: "Enabled"
  remoteEnabled: 'activé',

  // Original text: "Error"
  remoteError: 'Erreur',

  // Original text: "No backup available"
  noBackup: 'Pas de sauvegarde disponible',

  // Original text: "VM Name"
  backupVmNameColumn: 'Nom de la VM',

  // Original text: 'Tags'
  backupTags: undefined,

  // Original text: "Last Backup"
  lastBackupColumn: 'Dernière sauvegarde',

  // Original text: "Available Backups"
  availableBackupsColumn: 'Sauvegarde disponible',

  // Original text: 'Missing parameters'
  backupRestoreErrorTitle: undefined,

  // Original text: 'Choose a SR and a backup'
  backupRestoreErrorMessage: undefined,

  // Original text: "Display backups"
  displayBackup: 'Afficher les sauvegardes',

  // Original text: "Import VM"
  importBackupTitle: 'Importer une VM',

  // Original text: "Starting your backup import"
  importBackupMessage: "Démarrer l'import d'une sauvegarde",

  // Original text: "VMs to backup"
  vmsToBackup: 'VMs à sauvegarder',

  // Original text: "Emergency shutdown Host{nHosts, plural, one {} other {s}}"
  emergencyShutdownHostsModalTitle: "Extinction d'urgence de(s) hôte{nHosts, plural, one {} other {s}}",

  // Original text: "Are you sure you want to shutdown {nHosts} Host{nHosts, plural, one {} other {s}}?"
  emergencyShutdownHostsModalMessage: 'Êtes-vous sûr de vouloir arrêter {nHosts} Hôte{nHosts, plural, one {} other {s}}?',

  // Original text: "Shutdown host"
  stopHostModalTitle: "Arrêter l'hôte",

  // Original text: "This will shutdown your host. Do you want to continue? If it's the pool master, your connection to the pool will be lost"
  stopHostModalMessage: "Vous allez éteindre cet hôte. Voulez-vous continuer ? Si c'est le Maître du Pool, la connexion à tout le Pool sera perdue.",

  // Original text: "Add host"
  addHostModalTitle: 'Ajouter un hôte',

  // Original text: "Are you sure you want to add {host} to {pool}?"
  addHostModalMessage: 'Êtes-vous sûr de vouloir ajouter {host} à {pool}?',

  // Original text: "Restart host"
  restartHostModalTitle: "Redémarrer l'hôte",

  // Original text: "This will restart your host. Do you want to continue?"
  restartHostModalMessage: 'Votre hôte va devoir redémarrer. Voulez-vous continuer ?',

  // Original text: "Restart Host{nHosts, plural, one {} other {s}} agent{nHosts, plural, one {} other {s}}"
  restartHostsAgentsModalTitle: 'Redémarrer le{nHosts, plural, one {} other {s}} agent{nHosts, plural, one {} other {s}} de{nHosts, plural, one {} other {s}} hôte{nHosts, plural, one {} other {s}}',

  // Original text: "Are you sure you want to restart {nHosts} Host{nHosts, plural, one {} other {s}} agent{nHosts, plural, one {} other {s}}?"
  restartHostsAgentsModalMessage: 'Êtes-vous sûr de vouloir redémarrer le{nHosts, plural, one {} other {s}} agent{nHosts, plural, one {} other {s}} de{nHosts, plural, one {} other {s}} hôte{nHosts, plural, one {} other {s}}',

  // Original text: "Restart Host{nHosts, plural, one {} other {s}}"
  restartHostsModalTitle: "Redémarrer {nHosts, plural, one {l'} other {les}} hôte{nHosts, plural, one {} other {s}}",

  // Original text: "Are you sure you want to restart {nHosts} Host{nHosts, plural, one {} other {s}}?"
  restartHostsModalMessage: "Êtes-vous sûr de vouloir redémarrer {nHosts, plural, one {l'} other {les}} hôte{nHosts, plural, one {} other {s}} ?",

  // Original text: "Start VM{vms, plural, one {} other {s}}"
  startVmsModalTitle: 'Démarrer {vms, plural, one {la} other {les}} VM{vms, plural, one {} other {s}}',

  // Original text: "Are you sure you want to start {vms} VM{vms, plural, one {} other {s}}?"
  startVmsModalMessage: 'Êtes-vous sûr de vouloir démarrer {vms, plural, one {la} other {les}} {vms} VM{vms, plural, one {} other {s}} ?',

  // Original text: "Stop Host{nHosts, plural, one {} other {s}}"
  stopHostsModalTitle: "Arrêter {nHosts, plural, one {l'} other {les}} hôte{nHosts, plural, one {} other {s}}",

  // Original text: "Are you sure you want to stop {nHosts} Host{nHosts, plural, one {} other {s}}?"
  stopHostsModalMessage: "Êtes-vous sûr de vouloir arrêter {nHosts, plural, one {l'} other {les}} hôte{nHosts, plural, one {} other {s}} ?",

  // Original text: "Stop VM{vms, plural, one {} other {s}}"
  stopVmsModalTitle: 'Éteindre {vms, plural, one {cette} other {ces}} VM{vms, plural, one {} other {s}}',

  // Original text: "Are you sure you want to stop {vms} VM{vms, plural, one {} other {s}}?"
  stopVmsModalMessage: 'Êtes-vous sûr de vouloir éteindre {vms, plural, one {cette} other {ces}} {vms} VM{vms, plural, one {} other {s}} ?',

  // Original text: "Restart VM"
  restartVmModalTitle: 'Redémarrer la VM',

  // Original text: "Are you sure you want to restart {name}?"
  restartVmModalMessage: 'Êtes-vous sûr de vous redémarrer {name}?',

  // Original text: "Stop VM"
  stopVmModalTitle: 'Arrêter la VM',

  // Original text: "Are you sure you want to stop {name}?"
  stopVmModalMessage: 'Êtes-vous sûr de vouloir arrêter {name}?',

  // Original text: "Restart VM{vms, plural, one {} other {s}}"
  restartVmsModalTitle: 'Redémarrer {vms, plural, one {la} other {les}} VM{vms, plural, one {} other {s}}',

  // Original text: "Are you sure you want to restart {vms} VM{vms, plural, one {} other {s}}?"
  restartVmsModalMessage: 'Êtes-vous sûr de vouloir redémarrer {vms, plural, one {la} other {les}} VM{vms, plural, one {} other {s}} {vms} ?',

  // Original text: "Snapshot VM{vms, plural, one {} other {s}}"
  snapshotVmsModalTitle: 'Faire un instantané {vms, plural, one {de la} other {des}}  VM{vms, plural, one {} other {s}}',

  // Original text: "Are you sure you want to snapshot {vms} VM{vms, plural, one {} other {s}}?"
  snapshotVmsModalMessage: 'Êtes-vous sûr de vouloir faire un instantané {vms, plural, one {de la} other {des}} {vms} VM{vms, plural, one {} other {s}} ?',

  // Original text: "Delete VM{vms, plural, one {} other {s}}"
  deleteVmsModalTitle: 'Supprimer {vms, plural, one {la} other {les}} VM{vms, plural, one {} other {s}}',

  // Original text: "Are you sure you want to delete {vms} VM{vms, plural, one {} other {s}}? ALL VM DISKS WILL BE REMOVED"
  deleteVmsModalMessage: 'Êtes-vous sûr de vouloir supprimer {vms, plural, one {la} other {les}} {vms} VM{vms, plural, one {} other {s}} ? TOUT LES DISQUES ASSOCIÉS SERONT SUPPRIMÉ',

  // Original text: "Delete VM"
  deleteVmModalTitle: 'Supprimer la VM',

  // Original text: "Are you sure you want to delete this VM? ALL VM DISKS WILL BE REMOVED"
  deleteVmModalMessage: 'Êtes-vous sûr de vouloir supprimer cette VM ? TOUT LES DISQUES DE LA VM SERONT SUPPRIMÉ DEFINITIVEMENT',

  // Original text: "Migrate VM"
  migrateVmModalTitle: 'Migrer la VM',

  // Original text: "Select a destination host:"
  migrateVmSelectHost: 'Sélectionner un hôte de destination:',

  // Original text: "Select a migration network:"
  migrateVmSelectMigrationNetwork: 'Choisir un réseau de migration :',

  // Original text: "For each VDI, select an SR:"
  migrateVmSelectSrs: 'Pour chaque VDI, choisissez un SR :',

  // Original text: "For each VIF, select a network:"
  migrateVmSelectNetworks: 'Pour chaque VIF, choisissez un réseau :',

  // Original text: "Select a destination SR:"
  migrateVmsSelectSr: 'Sélectionnez un SR de destination :',

  // Original text: "Select a destination SR for local disks:"
  migrateVmsSelectSrIntraPool: 'Choisissez un SR de destination pour les disques locaux :',

  // Original text: "Select a network on which to connect each VIF:"
  migrateVmsSelectNetwork: 'Choisissez un réseau sur pour connecter chaque VIF :',

  // Original text: "Smart mapping"
  migrateVmsSmartMapping: 'Réaffectation intelligente',

  // Original text: "Name"
  migrateVmName: 'Nom',

  // Original text: "SR"
  migrateVmSr: 'SR',

  // Original text: "VIF"
  migrateVmVif: 'VIF',

  // Original text: "Network"
  migrateVmNetwork: 'Réseaux',

  // Original text: "No target host"
  migrateVmNoTargetHost: "Pas d'hôte cible",

  // Original text: "A target host is required to migrate a VM"
  migrateVmNoTargetHostMessage: 'Un hôte cible est nécessaire pour migrer une VM',

  // Original text: "Delete VDI"
  deleteVdiModalTitle: 'Supprimer le VDI',

  // Original text: "Are you sure you want to delete this disk? ALL DATA ON THIS DISK WILL BE LOST"
  deleteVdiModalMessage: 'Êtes-vous sûr de vouloir supprimer ce disque ? TOUTE LES DONNÉES CONTENUE SERONT PERDUE IRRÉMÉDIABLEMENT',

  // Original text: "Revert your VM"
  revertVmModalTitle: 'Restaurer la VM',

  // Original text: "Delete snapshot"
  deleteSnapshotModalTitle: "Supprimer l'instantané",

  // Original text: "Are you sure you want to delete this snapshot?"
  deleteSnapshotModalMessage: 'Êtes-vous sûr de vouloir supprimer cet instantané ?',

  // Original text: "Are you sure you want to revert this VM to the snapshot state? This operation is irreversible."
  revertVmModalMessage: "Êtes-vous sur de vouloir restaurer cette VM à l'état de cet instantané ? Cette opération est irrévocable.",

  // Original text: "Snapshot before"
  revertVmModalSnapshotBefore: 'Faire un instantané avant',

  // Original text: "Import a {name} Backup"
  importBackupModalTitle: 'Importer une sauvegarde {name}',

  // Original text: "Start VM after restore"
  importBackupModalStart: 'Démarrer la VM après la restauration',

  // Original text: "Select your backup…"
  importBackupModalSelectBackup: 'Sélectionnez votre sauvegarde…',

  // Original text: "Are you sure you want to remove all orphaned snapshot VDIs?"
  removeAllOrphanedModalWarning: 'Êtes-vous sûr de vouloir supprimer tout les instantanés de VDIs orphelin ?',

  // Original text: "Remove all logs"
  removeAllLogsModalTitle: 'Supprimer tout les journaux',

  // Original text: "Are you sure you want to remove all logs?"
  removeAllLogsModalWarning: 'Êtes-vous sûr de vouloir supprimer tout les journaux ?',

  // Original text: "This operation is definitive."
  definitiveMessageModal: 'Cette action est irréversible.',

  // Original text: "Previous SR Usage"
  existingSrModalTitle: 'Previous SR Usage',

  // Original text: "This path has been previously used as a Storage by a XenServer host. All data will be lost if you choose to continue the SR creation."
  existingSrModalText: 'Cet emplacement avait été utilisé auparavant comme un Stockage par un hôte XenServer. Toute les données présente seront perdue sur vous décider de continuer la création du SR.',

  // Original text: "Previous LUN Usage"
  existingLunModalTitle: 'Previous LUN Usage',

  // Original text: "This LUN has been previously used as a Storage by a XenServer host. All data will be lost if you choose to continue the SR creation."
  existingLunModalText: 'Ce LUN avait été utilisé auparavant comme un Stockage par un hôte XenServer. Toute les données présente seront perdue sur vous décider de continuer la création du SR.',

  // Original text: "Replace current registration?"
  alreadyRegisteredModal: "Remplacer l'enregistrement actuel ?",

  // Original text: "Your XO appliance is already registered to {email}, do you want to forget and replace this registration ?"
  alreadyRegisteredModalText: 'Votre instance XOA est déjà enregistré pour {email}, voulez-vous remplacer cet enregistrement ?',

  // Original text: "Ready for trial?"
  trialReadyModal: 'Prêt pour une démonstration ?',

  // Original text: "During the trial period, XOA need to have a working internet connection. This limitation does not apply for our paid plans!"
  trialReadyModalText: "Durant la période de démonstration, XOA nécessite une connexion internet fonctionnelle. Cette limitation disparaît avec la souscription d'une de nos formules.",

  // Original text: "Host"
  serverHost: 'Hôte',

  // Original text: "Username"
  serverUsername: "Nom d'utilisateur",

  // Original text: "Password"
  serverPassword: 'Mot de passe',

  // Original text: "Action"
  serverAction: 'Action',

  // Original text: "Read Only"
  serverReadOnly: 'Lecture seule',

  // Original text: "Disconnect server"
  serverDisconnect: 'Déconnecter le serveur',

  // Original text: "username"
  serverPlaceHolderUser: "nom d'utilisateur",

  // Original text: "password"
  serverPlaceHolderPassword: 'mot de passe',

  // Original text: "address[:port]"
  serverPlaceHolderAddress: 'adresse[:port]',

  // Original text: "Connect"
  serverConnect: 'Connecter',

  // Original text: "Copy VM"
  copyVm: 'Copier la VM',

  // Original text: "Are you sure you want to copy this VM to {SR}?"
  copyVmConfirm: 'Êtes-vous sûr de vouloir copier cette VM vers {SR}?',

  // Original text: "Name"
  copyVmName: 'Nom',

  // Original text: "Name pattern"
  copyVmNamePattern: 'Motif de nom',

  // Original text: "If empty: name of the copied VM"
  copyVmNamePlaceholder: 'Si vide: nom de la VM',

  // Original text: "e.g.: \"\\{name\\}_COPY\""
  copyVmNamePatternPlaceholder: 'ex.: "\\{name\\}_COPY"',

  // Original text: "Select SR"
  copyVmSelectSr: 'Sélectionner le SR',

  // Original text: "Use compression"
  copyVmCompress: 'Utiliser la compression',

  // Original text: "No target SR"
  copyVmsNoTargetSr: 'Pas de SR cible',

  // Original text: "A target SR is required to copy a VM"
  copyVmsNoTargetSrMessage: 'Un SR cible est nécessaire pour copier une VM',

  // Original text: "Detach host"
  detachHostModalTitle: "Détacher l'hôte",

  // Original text: "Are you sure you want to detach {host} from its pool? THIS WILL REMOVE ALL VMs ON ITS LOCAL STORAGE AND REBOOT THE HOST."
  detachHostModalMessage: "Êtes-vous sûr de vouloir détacher {host} de son pool? CELA SUPPRIMERA TOUTE LES VMs DE SON STOCKAGE LOCAL ET REDÉMARRERA L'HÔTE.",

  // Original text: "Detach"
  detachHost: 'Détacher',

  // Original text: "Create network"
  newNetworkCreate: 'Créer un réseau',

  // Original text: "Create bonded network"
  newBondedNetworkCreate: 'Créer un réseau agrégé',

  // Original text: "Interface"
  newNetworkInterface: 'Interface',

  // Original text: "Name"
  newNetworkName: 'Nom',

  // Original text: "Description"
  newNetworkDescription: 'Description',

  // Original text: "VLAN"
  newNetworkVlan: 'VLAN',

  // Original text: "No VLAN if empty"
  newNetworkDefaultVlan: 'Si vide, pas de VLAN',

  // Original text: "MTU"
  newNetworkMtu: 'MTU',

  // Original text: "Default: 1500"
  newNetworkDefaultMtu: 'Défaut: 1500',

  // Original text: "Name required"
  newNetworkNoNameErrorTitle: 'Un nom est nécessaire',

  // Original text: "A name is required to create a network"
  newNetworkNoNameErrorMessage: 'Un nom est nécessaire pour créer un réseau',

  // Original text: "Bond mode"
  newNetworkBondMode: 'Mode agrégé',

  // Original text: "Delete network"
  deleteNetwork: 'Supprimer le réseau',

  // Original text: "Are you sure you want to delete this network?"
  deleteNetworkConfirm: 'Êtes-vous sûr de vouloir supprimer ce réseau ?',

  // Original text: "This network is currently in use"
  networkInUse: "Ce réseau est en cours d'utilisation",

  // Original text: "Bonded"
  pillBonded: 'Agrégé',

  // Original text: "Host"
  addHostSelectHost: 'Hôte',

  // Original text: "No host"
  addHostNoHost: "Pas d'hôtes",

  // Original text: "No host selected to be added"
  addHostNoHostMessage: 'Aucun hôte sélectionné pour ajout',

  // Original text: "Xen Orchestra"
  xenOrchestra: 'Xen Orchestra',

  // Original text: "server"
  xenOrchestraServer: 'server',

  // Original text: "web client"
  xenOrchestraWeb: 'web client',

  // Original text: "No pro support provided!"
  noProSupport: 'Pas de support professionel fourni !',

  // Original text: "Use in production at your own risks"
  noProductionUse: 'Utilisez en production à vos risques et périls',

  // Original text: "You can download our turnkey appliance at"
  downloadXoa: 'Téléchargez notre édition clef en main sur',

  // Original text: "Bug Tracker"
  bugTracker: 'Gestionnaire de ticket',

  // Original text: "Issues? Report it!"
  bugTrackerText: 'Un soucis ? Dites-le !',

  // Original text: "Community"
  community: 'Communauté',

  // Original text: "Join our community forum!"
  communityText: 'Rejoignez notre communauté !',

  // Original text: "Free Trial for Premium Edition!"
  freeTrial: "Démonstration gratuite de l'Édition Premium !",

  // Original text: "Request your trial now!"
  freeTrialNow: 'Demandez une démonstration dès maintenant !',

  // Original text: "Any issue?"
  issues: 'Des soucis ?',

  // Original text: "Problem? Contact us!"
  issuesText: 'Un problème ? Contactez nous !',

  // Original text: "Documentation"
  documentation: 'Documentation',

  // Original text: "Read our official doc"
  documentationText: 'Consultez notre documentation officielle',

  // Original text: "Pro support included"
  proSupportIncluded: 'Support professionel inclu',

  // Original text: "Acces your XO Account"
  xoAccount: 'Accèder à votre compte XO',

  // Original text: "Report a problem"
  openTicket: 'Signaler un problème',

  // Original text: "Problem? Open a ticket!"
  openTicketText: 'Un problème ? Ouvrez un ticket !',

  // Original text: "Upgrade needed"
  upgradeNeeded: 'Mise à jour nécessaire',

  // Original text: "Upgrade now!"
  upgradeNow: 'Mettre à jour maintenant !',

  // Original text: "Or"
  or: 'Ou',

  // Original text: "Try it for free!"
  tryIt: 'Essayez gratuitement !',

  // Original text: "This feature is available starting from {plan} Edition"
  availableIn: "Cette fonctionnalité est disponible à partir de l'édition {plan}",

  // Original text: "This feature is not available in your version, contact your administrator to know more."
  notAvailable: "Cette fonctionnalité n'est pas disponible dans cette édtition. Pour plus d'informations, contactez votre administrateur.",

  // Original text: "Updates"
  updateTitle: 'Mise à jour',

  // Original text: "Registration"
  registration: 'Enregistrement',

  // Original text: "Trial"
  trial: 'Démonstration',

  // Original text: "Settings"
  settings: 'Paramètres',

  // Original text: "Proxy settings"
  proxySettings: 'Configuration du proxy',

  // Original text: "Host (myproxy.example.org)"
  proxySettingsHostPlaceHolder: 'Hôte (monproxy.exemple.tld)',

  // Original text: "Port (eg: 3128)"
  proxySettingsPortPlaceHolder: 'Port (ex: 3128)',

  // Original text: "Username"
  proxySettingsUsernamePlaceHolder: "Nom d'utilisateur",

  // Original text: "Password"
  proxySettingsPasswordPlaceHolder: 'Mot de passe',

  // Original text: "Your email account"
  updateRegistrationEmailPlaceHolder: 'Email du compte',

  // Original text: "Your password"
  updateRegistrationPasswordPlaceHolder: 'Mot de passe',

  // Original text: "Update"
  update: 'Actualiser',

  // Original text: "Refresh"
  refresh: 'Rafraîchir',

  // Original text: "Upgrade"
  upgrade: 'Mettre à jour',

  // Original text: "No updater available for Community Edition"
  noUpdaterCommunity: 'Pas de mise à jour sur la version Communautaire',

  // Original text: "Please consider subscribe and try it with all features for free during 15 days on"
  noUpdaterSubscribe: 'Envisagez de souscrire, et essayez toute les fonctionnalitées gratuitement pendant 15 jours',

  // Original text: "Manual update could break your current installation due to dependencies issues, do it with caution"
  noUpdaterWarning: 'Une mise à jour manuelle pourrait corrompre votre installation actuelle à cause des dépendances, soyez prudent',

  // Original text: "Current version:"
  currentVersion: 'Version actuelle :',

  // Original text: "Register"
  register: "S'enregistrer",

  // Original text: "Edit registration"
  editRegistration: "Éditer l'enregistrement",

  // Original text: "Please, take time to register in order to enjoy your trial."
  trialRegistration: 'Merci de prendre le temps de vous enregistrer afin de profiter de votre essai.',

  // Original text: "Start trial"
  trialStartButton: "Commencer la période d'essai",

  // Original text: "You can use a trial version until {date, date, medium}. Upgrade your appliance to get it."
  trialAvailableUntil: "Vous pouvez utiliser une version d'essai jusqu'au {date, date, medium}. Mettez à jour votre XOA pour en profiter.",

  // Original text: "Your trial has been ended. Contact us or downgrade to Free version"
  trialConsumed: "Votre période d'essai est terminé. Contactez-nous, ou régressez sur l'édition gratuite.",

  // Original text: "Your xoa-updater service appears to be down. Your XOA cannot run fully without reaching this service."
  trialLocked: 'Votre service xoa-update semble inaccessible. Votre XOA ne peux pas fonctionner pleinement si il ne peux pas joindre ce service.',

  // Original text: "No update information available"
  noUpdateInfo: "Pas d'informations de mises à jour disponible",

  // Original text: "Update information may be available"
  waitingUpdateInfo: 'Des informations de mises à jour sont peut-être disponible',

  // Original text: "Your XOA is up-to-date"
  upToDate: 'Votre XOA est à jour',

  // Original text: "You need to update your XOA (new version is available)"
  mustUpgrade: 'Vous devez mettre à jour votre XOA (une nouvelle version est disponible)',

  // Original text: "Your XOA is not registered for updates"
  registerNeeded: "Votre XOA n'est pas enregistré pour les mises à jour",

  // Original text: "Can't fetch update information"
  updaterError: 'Impossible de récupérer les informations de mise à jour.',

  // Original text: "Upgrade successful"
  promptUpgradeReloadTitle: 'Mise à jour réussi',

  // Original text: "Your XOA has successfully upgraded, and your browser must reload the application. Do you want to reload now ?"
  promptUpgradeReloadMessage: "Votre XOA à été mis à jour avec brio, et votre navigateur doit rafraîchir l'application pour en profiter. Voulez-vous rafraîchir dès maintenant ?",

  // Original text: "Xen Orchestra from the sources"
  disclaimerTitle: 'Xen Orchestra depuis les sources',

  // Original text: "You are using XO from the sources! That's great for a personal/non-profit usage."
  disclaimerText1: "Vous utilisez XO depuis les sources. C'est parfait pour un usage personnel ou non lucratif.",

  // Original text: "If you are a company, it's better to use it with our appliance + pro support included:"
  disclaimerText2: "Si vous êtes une entrerprise, il est préférable d'utiliser notre applicance qui inclu du support professionel.",

  // Original text: "This version is not bundled with any support nor updates. Use it with caution for critical tasks."
  disclaimerText3: "Cette version n'est fournit avec aucun support ni aucune mise à jour. Soyez prudent en cas d'utilisation pour des tâches importantes.",

  // Original text: "Connect PIF"
  connectPif: 'Connecter la PIF',

  // Original text: "Are you sure you want to connect this PIF?"
  connectPifConfirm: 'Êtes-vous sûr de vouloir connecter cette PIF ?',

  // Original text: "Disconnect PIF"
  disconnectPif: 'Déconnecter la PIF',

  // Original text: "Are you sure you want to disconnect this PIF?"
  disconnectPifConfirm: 'Êtes-vous sûr de vouloir déconnecter cette PIF ?',

  // Original text: "Delete PIF"
  deletePif: 'Supprimer la PIF',

  // Original text: "Are you sure you want to delete this PIF?"
  deletePifConfirm: 'Êtes-vous sûr de vouloir supprimer cette PIF ?',

  // Original text: "Username"
  username: "Nom d'utilisateur",

  // Original text: "Password"
  password: 'Mot de passe',

  // Original text: "Language"
  language: 'Langue',

  // Original text: "Old password"
  oldPasswordPlaceholder: 'Ancien mot de passe',

  // Original text: "New password"
  newPasswordPlaceholder: 'Nouveau mot de passe',

  // Original text: "Confirm new password"
  confirmPasswordPlaceholder: 'Confirmer le nouveau mot de passe',

  // Original text: "Confirmation password incorrect"
  confirmationPasswordError: 'Confirmation du nouveau mot de passe invalide',

  // Original text: "Password does not match the confirm password."
  confirmationPasswordErrorBody: 'Password does not match the confirm password.',

  // Original text: "Password changed"
  pwdChangeSuccess: 'Mot de passe modifié',

  // Original text: "Your password has been successfully changed."
  pwdChangeSuccessBody: 'Votre mot de passe a été modifié avec succés.',

  // Original text: "Incorrect password"
  pwdChangeError: 'Mot de passe invalide',

  // Original text: "The old password provided is incorrect. Your password has not been changed."
  pwdChangeErrorBody: 'The old password provided is incorrect. Your password has not been changed.',

  // Original text: "OK"
  changePasswordOk: 'OK',

  // Original text: "SSH keys"
  sshKeys: 'Clefs SSH',

  // Original text: "New SSH key"
  newSshKey: 'Nouvelle clef SSH',

  // Original text: "Delete"
  deleteSshKey: 'Supprimer',

  // Original text: "No SSH keys"
  noSshKeys: 'Pas de clef SSH',

  // Original text: "New SSH key"
  newSshKeyModalTitle: 'New SSH key',

  // Original text: "Invalid key"
  sshKeyErrorTitle: 'Clef invalide',

  // Original text: "An SSH key requires both a title and a key."
  sshKeyErrorMessage: 'Une clef SSH nécessite un titre et une clef',

  // Original text: "Title"
  title: 'Titre',

  // Original text: "Key"
  key: 'Clef',

  // Original text: "Delete SSH key"
  deleteSshKeyConfirm: 'Supprimer la clef SSH',

  // Original text: "Are you sure you want to delete the SSH key {title}?"
  deleteSshKeyConfirmMessage: 'Êtes-vous sûr de vous supprimer la clef SSH {title}?',

  // Original text: "Others"
  others: 'Autres',

  // Original text: "Loading logs…"
  loadingLogs: 'Chargement des journaux…',

  // Original text: "User"
  logUser: 'Utilisateur',

  // Original text: "Method"
  logMethod: 'Méthode',

  // Original text: "Params"
  logParams: 'Paramètres',

  // Original text: "Message"
  logMessage: 'Message',

  // Original text: "Error"
  logError: 'Erreur',

  // Original text: "Display details"
  logDisplayDetails: 'Afficher les détails',

  // Original text: "Date"
  logTime: 'Date',

  // Original text: "No stack trace"
  logNoStackTrace: 'No stack trace',

  // Original text: "No params"
  logNoParams: 'No params',

  // Original text: "Delete log"
  logDelete: 'Supprimer le log',

  // Original text: "Delete all logs"
  logDeleteAll: 'Supprimer tout les journaux',

  // Original text: "Delete all logs"
  logDeleteAllTitle: 'Supprimer tout les journaux',

  // Original text: "Are you sure you want to delete all the logs?"
  logDeleteAllMessage: 'Êtes-vous sûr de vouloir supprimer tout les journaux ?',

  // Original text: "Name"
  ipPoolName: 'Nom',

  // Original text: "IPs"
  ipPoolIps: 'IPs',

  // Original text: "IPs (e.g.: 1.0.0.12-1.0.0.17;1.0.0.23)"
  ipPoolIpsPlaceholder: 'IPs (e.g.: 1.0.0.12-1.0.0.17;1.0.0.23)',

  // Original text: "Networks"
  ipPoolNetworks: 'Réseaux',

  // Original text: "No IP pools"
  ipsNoIpPool: "Pas de plages d'IPs",

  // Original text: "Create"
  ipsCreate: 'Créer',

  // Original text: "Delete all IP pools"
  ipsDeleteAllTitle: "Supprimer toutes les plages d'IPs",

  // Original text: "Are you sure you want to delete all the IP pools?"
  ipsDeleteAllMessage: "Êtes-vous sûr de vouloir supprimer toutes les plages d'IP ?",

  // Original text: "VIFs"
  ipsVifs: 'VIFs',

  // Original text: "Not used"
  ipsNotUsed: 'Non utilisé',

  // Original text: "Keyboard shortcuts"
  shortcutModalTitle: 'Raccourcis clavier',

  // Original text: "Global"
  shortcut_XoApp: 'Global',

  // Original text: "Go to hosts list"
  shortcut_GO_TO_HOSTS: 'Aller sur la liste des hôtes',

  // Original text: "Go to pools list"
  shortcut_GO_TO_POOLS: 'Aller sur la liste des pools',

  // Original text: "Go to VMs list"
  shortcut_GO_TO_VMS: 'Aller sur la liste des VMs',

  // Original text: "Create a new VM"
  shortcut_CREATE_VM: 'Créer une nouvelle VM',

  // Original text: "Unfocus field"
  shortcut_UNFOCUS: 'Quitter le champ',

  // Original text: "Show shortcuts key bindings"
  shortcut_HELP: 'Afficher les raccourcis clavier',

  // Original text: "Home"
  shortcut_Home: 'Accueil',

  // Original text: "Focus search bar"
  shortcut_SEARCH: 'Curseur dans la barre de recherche',

  // Original text: "Next item"
  shortcut_NAV_DOWN: 'Élément suivant',

  // Original text: "Previous item"
  shortcut_NAV_UP: 'Élément précédent',

  // Original text: "Select item"
  shortcut_SELECT: "Sélectionné l'élément",

  // Original text: "Open"
  shortcut_JUMP_INTO: 'Ouvrir',

  // Original text: "VM"
  settingsAclsButtonTooltipVM: 'VM',

  // Original text: "Hosts"
  settingsAclsButtonTooltiphost: 'Hôtes',

  // Original text: "Pool"
  settingsAclsButtonTooltippool: 'Pool',

  // Original text: "SR"
  settingsAclsButtonTooltipSR: 'SR',

  // Original text: "Network"
  settingsAclsButtonTooltipnetwork: 'Réseaux'
}
