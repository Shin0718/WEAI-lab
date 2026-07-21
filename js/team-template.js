// Team Member Template Generator
function createTeamMemberHTML(member) {
    const links = member.links || {};

    // Build image style with square aspect ratio and crop
    const baseImageStyle = 'width: 100%; aspect-ratio: 1 / 1; object-fit: cover;';
    const imageStyle = `border-radius: 50%; ${member.imageStyle ? member.imageStyle : baseImageStyle}`;
    const textAvatarStyle = `${imageStyle} display: flex; align-items: center; justify-content: center; background: #f2f4f7; border: 1px solid #d8dde6; color: #1f2a37; font-size: 26px; font-weight: 600; line-height: 1;`;
    const initials = member.initials || member.name.replace(/\s*(教授|博士|先生|女士)\s*$/, '').trim().slice(0, 2);
    const avatarHTML = member.image
        ? `<img class="image img-fluid" src="${member.image}" alt="${member.name}" style="${imageStyle}">`
        : `<div class="image img-fluid text-avatar" aria-label="${member.name}" style="${textAvatarStyle}">
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
    
    // Build additional info HTML
    const additionalInfoHTML = member.additionalInfo ? `<br>${member.additionalInfo}` : '';
    
    // Return complete member HTML
    return `
        <div class="single-portfolio col-sm-2 all raster" style="padding: 2vh">
            <div class="relative">
                <div class="thumb">
                    <div class="overlay overlay-bg" style="border-radius: 50%"></div>
                    ${avatarHTML}
                </div>
                <div class="middle" style="${linksHTML ? '' : 'display: none;'}">
                    ${linksHTML}
                </div>
            </div>
            <div class="p-inner" style="text-align: center">
                <h4>${member.name}</h4>
                <div class="cat" style="text-transform: none">${member.role}${additionalInfoHTML}</div>
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
