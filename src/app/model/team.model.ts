export class TeamModel {
    id! :number;
    name! :string;
    parentRoleId? :number;
    roleId! :number;
    role! :string;
    description? :string;
    imageUrl! :string;
    instagramUrl! :string;
    linkedInUrl! :string;
    facebookUrl! :string;
    memberList :any[] = [];
    showMember :boolean = false;
}