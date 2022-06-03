# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


def check(s):
# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
    account_sid = 'AC4a11a59091a289f9edba4de147c5aeb5'
    auth_token = 'dac6393ff83c3ad94901a87d13eeee33'
    client = Client(account_sid, auth_token)

    # add_ons_data = {"payfone_tcpa_compliance.RightPartyContactedDate": "20160101"}

    message = client.messages \
                    .create(
                        body="Python sms is working /n Raghav",
                        from_='+17579097849',
                        to='+91'+s
                    )

    print(message.sid)

