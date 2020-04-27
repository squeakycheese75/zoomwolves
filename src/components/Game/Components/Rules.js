import React from "react";

export function Cast(props) {
  return (
    <div>
      <article class="markdown-body" align="left">
        <header>
          <h1 className="docTitle_1vWb">How to play the game.</h1>
        </header>
        <div className="markdown">
          <p>
            Zoomwolves is a social engineering game, it's very important to
            follow the rules, expecially online! It's also important that
            players don't look at their screens during the night time event
            unless instructed to by the moderator!
          </p>
          <p>
            This website helps you to setup a game, distribute the game joining
            link to the players and to run the random player casting.
          </p>
          <p>
            It's designed to run alongside a conferencing tool like{" "}
            <a
              href="https://zoom.us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zoom
            </a>{" "}
            or{" "}
            <a
              href="https://jitsi.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jitsi
            </a>
            .
          </p>

          <p>Players: 6 to 15</p>
          <h2>The Aim and Winning</h2>
          <p>There are 2 teams:</p>
          <ul>
            <li>
              <p>The werewolves - there are 2.</p>
            </li>
            <li>
              <p>The villagers - Villagers, a Seer and a Witch.</p>
            </li>
          </ul>
          <p>
            The werewolves win the game if they kill all the villagers and the
            villagers win if they kill the werewolves. Simple.
          </p>
          <h1>The Game</h1>
          <p>
            The game repeats the below stages until either the werewolves are
            both killed or there are only werewolves are left.
          </p>
          <hr className="my-2" />
          <h2>The Night time</h2>
          <h4>When the Werewolves hunt!</h4>
          <p>
            Instruct everyone to look down during the night times events and
            make sure they're on mute. Cheaters generally get eaten!
          </p>
          <h5>The Werewolves</h5>
          <ul>
            <li>
              <p align="left">
                Ask the <b>Werewolves</b> to wake up and identify themselves.
              </p>
            </li>
            <li>
              <p>
                They need to pick someone to kill and eat. Get them to <b>pm</b>{" "}
                each other and then <b>pm</b> you.
              </p>
            </li>
            <li>
              <p>Once they've picked a vilager send them back to sleep.</p>
            </li>
          </ul>
          <h5>The Seer</h5>
          <ul>
            <li>
              <p>
                Ask the the <b>Seer</b> to wake and identify themself.{" "}
              </p>
            </li>
            <li>
              <p>
                They need to pick someone to use their powers on. Have he/she{" "}
                <b>pm</b> who they want to use their power on.
              </p>
            </li>
            <li>
              <p>
                Let the seer know if that person is a Werewolf or not. Use a
                thumbs up or down or use the pm.
              </p>
            </li>
            <li>
              <p>Send the Seer back to sleep!</p>
            </li>
          </ul>
          <h5>The Witch</h5>
          <ul>
            <li>
              <p>
                Ask the the <b>Witch</b> to wake and identify themself.
              </p>
            </li>
            <li>
              <p>
                They need to decide whether to use their special powers. They
                can poison once and revive once.
              </p>
            </li>
            <li>
              <p>
                Ask them if they want to use one of their powers? If they do get
                them to identify who they wish to use the power on.
              </p>
              <p>
                If it's poison then have them <b>pm</b> you the name of the
                player to kill.
              </p>
              <p>
                If it's revive they will revive the person killed in that turn
                by the Werewolves.
              </p>
              <p>Keep track of what powers they've used.</p>
            </li>
            <li>
              <p>Send the Witch back to sleep!</p>
            </li>
          </ul>
          <br />
          <h2 align="left">The Day time</h2>
          <ul>
            <li>
              <p align="left">
                Instruct everyone to wake up and un-mute themselves.
              </p>
            </li>
            <li>
              <p>
                Inform them of the nights event and let them know who, if
                anyone, has been killed.
              </p>
            </li>
            <li>
              <p>
                If someone has been killed have them to reveal their character
                and turn off their video feed and mute themselves for the rest
                of the game.
              </p>
            </li>
            <h5>The Villagers</h5>
            <li>
              <p>
                The villagers must now discuss and decide to kill one person. I
                would suggest timeboxing this. Varies for different group sizes.
              </p>
              <p>
                The werewolves are trying not to be caught, so can employ
                whatever tactics they want to avoid being revealed and killed.
              </p>
              <p>
                Get the alive players to vote on who to sacrifice. Do a show of
                hands! If there is no winning vote then no one is killed and we
                move to night time. Feel free to flesh this out.
              </p>
            </li>
          </ul>
          <p>
            Repeat then night/day time process until either the werewolves are
            all dead or the werewolves kill all the villagers..
          </p>
          <h5>Good Luck</h5>
        </div>
      </article>
    </div>
  );
}

export default Cast;
