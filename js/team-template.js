// Team Member Template Generator
function createTeamMemberHTML(member) {
    const links = member.links || {};

    const initials = member.initials || member.name
        .split(/\s+/)
        .filter(Boolean)
        .map(part => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
    const avatarHTML = member.image
        ? `<img class="image img-fluid team-avatar" src="${member.image}" alt="${member.name}">`
        : `<div class="image img-fluid team-avatar text-avatar" aria-label="${member.name}">
                <span>${initials}</span>
           </div>`;
    
    // Build social links HTML
    let linksHTML = '';
    if (links.website) {
        linksHTML += `<a title="Website" href="${links.website}" class="website" style="font-size: 15px">Website <i class="fa fa-globe"></i></a>`;
    }
    if (links.scholar) {
        linksHTML += `<a title="Google Scholar" href="${links.scholar}" class="scholar" style="font-size: 16px;">Scholar&nbsp;<i class="ai ai-google-scholar"></i></a>`;
    }
    if (links.twitter) {
        linksHTML += `<a title="Twitter" href="${links.twitter}" class="twitter" style="font-size: 16px;">Twitter&nbsp;<i class="fa fa-twitter"></i></a>`;
    }
    if (links.github) {
        linksHTML += `<a title="Github" href="${links.github}" class="Github" style="font-size: 16px;">Github&nbsp;<i class="fa fa-github"></i></a>`;
    }
    if (links.linkedin) {
        linksHTML += `<a title="LinkedIn" href="${links.linkedin}" class="linkedin" style="font-size: 15px;">LinkedIn&nbsp;<i class="fa fa-linkedin"></i></a>`;
    }
    
    const additionalInfoHTML = member.additionalInfo ? `<div class="team-affiliation">${member.additionalInfo}</div>` : '';
    
    // Return complete member HTML
    return `
        <div class="single-portfolio team-member-card col-sm-6 col-md-4 col-lg-3 all raster">
            <div class="relative">
                <div class="thumb">
                    <div class="overlay overlay-bg"></div>
                    ${avatarHTML}
                </div>
                <div class="middle" style="${linksHTML ? '' : 'display: none;'}">
                    ${linksHTML}
                </div>
            </div>
            <div class="p-inner">
                <h4>${member.name}</h4>
                <div class="cat">${member.role}</div>
                ${additionalInfoHTML}
            </div>
        </div>
    `;
}

// Function to render all team members
function renderTeamMembers(containerName, data) {
    const container = document.getElementById(containerName);
    if (!container) {
        console.error('Team members container not found');
        return;
    }
    
    const teamHTML = data.map(member => createTeamMemberHTML(member)).join('');
    container.innerHTML = teamHTML;

    // Remove the height:0 that Isotope adds and fix layout
    container.style.height = 'auto';
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Render team members if container exists
    if (document.getElementById('team-members-container')) {
        renderTeamMembers('team-members-container', teamMembers);
    }

    // Render masters alumni if container exists
    if (document.getElementById('masters-alumni-container')) {
        renderTeamMembers('masters-alumni-container', mastersAlumni);
    }
    
    // Render undergraduate alumni if container exists
    if (document.getElementById('undergraduate-alumni-container')) {
        renderTeamMembers('undergraduate-alumni-container', undergraduateAlumni);
    }
});
