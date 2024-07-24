---
description: >-
  You can record any update without manual work, once the API integration is
  configured with your ERP or other software that knows what you do.
---

# Sync with internal systems

Integration is simple, but we can even help in that.

Base URL: [https://api.trace.market](https://api.trace.market)

## Mint NFT with a new record

<mark style="color:green;">`POST`</mark> `/mint`

Call this endpoint to publish new service capacity or product instances.

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

| Name      | Type        | Description                                                                     |
| --------- | ----------- | ------------------------------------------------------------------------------- |
| `to`      | EVM address | The owner wallet of the NFT, should be yours                                    |
| `content` | json        | The actualized JSON from the template you can copy from [.](./ "mention") page. |

**Response**

{% tabs %}
{% tab title="200" %}
```json
{
    "message": "NFT minted successfully!",
    "tokenId": "0xafad2547ea3a4e18e86638b6b72120f55889f97c65699d54af735ac60f729f25",
    "swarmReference": "8a9486899faa8bb0b4f9256cc276b6fbe738c0ab9c2b55c490bbb8fc6a1f0c1e"
}
```
{% endtab %}

{% tab title="400" %}
```json
{
  "error": "Invalid request"
}
```
{% endtab %}
{% endtabs %}

